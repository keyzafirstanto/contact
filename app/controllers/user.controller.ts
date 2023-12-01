import { ResponseConstant } from "@constants";
import { UserService } from "@services";
import { NextFunction, Request, Response } from "express";

export default class UserController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      ResponseConstant.success({ data: await UserService.index(req) }, res);
    } catch (e) {
      next(e);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      ResponseConstant.success({ data: await UserService.create(req) }, res);
    } catch (e) {
      next(e);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      ResponseConstant.success({ data: await UserService.update(req) }, res);
    } catch (e) {
      next(e);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      ResponseConstant.success({ data: await UserService.delete(req) }, res);
    } catch (e) {
      next(e);
    }
  }
}
