import { User } from "@prisma/client";
import { FormatedUtil } from "@utils";

interface MetaDataType {
  page: number;
  limit: number;
  total: number;
}

export default class UserSerializer {
  static index(data: User[], meta: MetaDataType) {
    const mapping = data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        phone: item.phone,
        email: item.email,
        created_at: FormatedUtil.formatDateTime(item.created_at),
        updated_at: FormatedUtil.formatDateTime(item.updated_at),
      };
    });

    return {
      data: mapping,
      meta: meta,
    };
  }

  static create(data: User) {
    return {};
  }

  static update(data: User) {
    return {};
  }

  static delete(data: User) {
    return {};
  }

  static createMenu(data: User) {
    return {};
  }

  static updateMenu(data: User) {
    return {};
  }

  static deleteMenu(data: User) {
    return {};
  }
}
