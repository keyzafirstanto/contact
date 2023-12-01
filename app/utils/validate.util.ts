import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWTKEY = process.env.JWTKEY;

export default class ValidateUtil {
  static email(email: string) {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  static phone(phone: string) {
    return String(phone).match(/^(\+62|62|0)(\d{3,4}-?){2}\d{3,4}$/);
  }

  static bcryptCheck(data: string, hash: string) {
    const replaceHash = hash.replace(/^\$2y(.+)$/i, "$2a$1");
    return bcrypt.compareSync(data, replaceHash);
  }

  static async bcryptEnkripsi(data: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hashSync(data, salt);
  }

  static jwtDecrypt = (token: any) => {
    try {
      return jwt.verify(token, String(JWTKEY)) as any;
    } catch (e: any) {
      e.code = 401;
      e.message = "Invalid token";
      throw e;
    }
  };

  static jwtGenerate = async (json: any) => {
    return jwt.sign(json, String(JWTKEY));
  };
}
