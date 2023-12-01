import { DefaultConstant } from "@constants";
import { UserModel } from "@models";
import { UserSerializer } from "@serializers";
import { GeneratedUtil, HttpExceptionUtil, ValidateUtil } from "@utils";
import { Request } from "express";
import i18n from "i18n";
import * as yup from "yup";

const user = UserModel.user;
export default class UserService {
  private static async indexYup(query: any) {
    try {
      const schema = yup.object({
        page: yup.number().optional().default(1),
        limit: yup.number().optional().default(10),
        search: yup.string().optional(),
      });
      return await schema.validate(query);
    } catch (e: any) {
      throw new HttpExceptionUtil({ code: 400, error_code: e.message, data: e });
    }
  }
  static async index(req: Request) {
    const request = await this.indexYup(req.query);
    const skip = (request.page - 1) * request.limit;

    let where = {};
    if (request.search) {
      where = {
        where: {
          OR: [
            {
              name: {
                contains: request.search,
              },
            },
            {
              email: {
                contains: request.search,
              },
            },
            {
              phone: {
                contains: request.search,
              },
            },
          ],
        },
      };
    }

    const result = await user.findMany({ ...where, take: request.limit, skip });
    const total = await user.count( where );
    const meta = DefaultConstant.metadata(request, total);
    return UserSerializer.index(result, meta);
  }

  private static async createYup(body: any) {
    try {
      const schema = yup.object({
        name: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required(),
      });
      return await schema.validate(body);
    } catch (e: any) {
      throw new HttpExceptionUtil({ code: 400, error_code: e.message, data: e });
    }
  }
  static async create(req: Request) {
    const request = await this.createYup(req.body);
    const result = await user.findByEmailOrPhone({ email: request.email, phone: request.phone });
    if (result) throw new HttpExceptionUtil({ code: 400, message: i18n.__("user.already_registered") });
    const password = GeneratedUtil.randomString(8);
    const data = await user.create({
      data: {
        email: request.email,
        name: request.name,
        password: await ValidateUtil.bcryptEnkripsi(password),
        phone: request.phone,
      },
    });
    return UserSerializer.create(data);
  }

  private static async updateYup(body: any) {
    try {
      const schema = yup.object({
        id: yup.string().required("UserService#001"),
        name: yup.string().optional(),
        phone: yup.string().optional(),
        email: yup.string().optional().email("UserService#004"),
      });
      return await schema.validate(body);
    } catch (e: any) {
      throw new HttpExceptionUtil({ code: 400, error_code: e.message, data: e });
    }
  }
  static async update(req: Request) {
    const request = await this.updateYup(req.body);
    const result = await user.findFirst({ where: { id: request.id } });
    if (!result) throw new HttpExceptionUtil({ code: 400, message: i18n.__("user.not_found") });
    if (request.email || request.phone) {
      const checkAccount = await user.findByEmailOrPhone({ email: String(request.email), phone: String(request.phone) });
      if (!checkAccount) throw new HttpExceptionUtil({ code: 400, message: i18n.__("user.already_registered") });
    }
    await user.update({
      where: { id: request.id },
      data: {
        name: request.name,
        phone: request.phone,
        email: request.email,
      },
    });
    return UserSerializer.update(result);
  }

  private static async deleteYup(body: any) {
    try {
      const schema = yup.object({
        id: yup.string().required("UserService#001"),
      });
      return await schema.validate(body);
    } catch (e: any) {
      throw new HttpExceptionUtil({ code: 400, error_code: e.message, data: e });
    }
  }
  static async delete(req: Request) {
    const request = await this.deleteYup(req.body);
    const result = await user.delete({ where: { id: request.id } });
    if (!result) throw new HttpExceptionUtil({ code: 400, message: i18n.__("user.not_found") });
    return UserSerializer.delete(result);
  }
}
