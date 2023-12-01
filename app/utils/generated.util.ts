import Randomstring from "randomstring";

export default class GeneratedUtil {
  static randomString(length: number) {
    return Randomstring.generate({
      length: length,
      charset: "alphanumeric",
      capitalization: "uppercase",
    });
  }

  static randomNumber(length: number) {
    return Randomstring.generate({
      length: length,
      charset: "numeric",
    });
  }
}
