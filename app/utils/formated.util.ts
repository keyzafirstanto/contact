import moment from "moment";
import numbro from "numbro";

export default class FormatedUtil {
  static formattedNumber = (number: number | string) => {
    let formattedNumber = numbro(number).format({
      thousandSeparated: true,
    });
    return formattedNumber;
  };

  static formatPhone = (phone: string) => {
    let formatted = phone.replace(/\D/g, "");

    if (formatted.startsWith("62") || formatted.startsWith("+62")) {
      formatted = formatted.replace(/^(62|\+62)/, "0");
    } else if (formatted.startsWith("8")) {
      formatted = `0${formatted}`;
    }

    return formatted;
  };

  static formatSeconds = (value: string) => {
    const seconds = parseInt(value, 10);

    if (isNaN(seconds)) {
      throw new TypeError("Invalid value sent to convert-seconds");
    }
    let results: { hours: number; minutes: number; seconds: number } = {
      hours: Math.floor(seconds / 60 / 60),
      minutes: Math.floor((seconds / 60) % 60),
      seconds: Math.floor(seconds % 60),
    };

    return results;
  };

  static timeResponse = (start: number, end: number) => {
    const mil = start - end;
    const convertSecond = mil / 1000;
    return `${Math.abs(convertSecond).toFixed(2)} seconds`;
  };

  static formatBase64BasicToken = (tokenBesic: string) => {
    const data = Buffer.from(tokenBesic.split(" ")[1], "base64").toString().split(":");
    return {
      username: data[0],
      password: data[1],
    };
  };

  static formatDateTime = (date: Date) => {
    return moment(date).format("DD-MM-YYYY HH:mm:ss");
  };

  static formatDateTimeNow = () => {
    return moment().format("DD-MM-YYYY HH:mm:ss");
  };

  static base64ExtFile = (base64: string) => {
    try {
      const ext = base64.split(";")[0].split("/")[1];
      return ext;
    } catch (e) {
      return false;
    }
  };

  static getUrlFileName = (url: string) => {
    // format url / or %2F
    const urlFormat = url.replace(/%2F/g, "/");
    const urlSplit = urlFormat.split("/");
    const fileName = urlSplit[urlSplit.length - 1];
    return fileName;
  };
}
