import i18n from "i18n";

export default class HttpExceptionUtil extends Error {
  code: number;
  error_code?: string;
  message: string;
  data?: any;
  constructor(data: { code: number; error_code?: string; message?: string; data?: any }) {
    super(data.message);
    this.code = data.code;
    this.error_code = data.error_code;
    this.message = data.message || i18n.__("general.error_try_again");
    this.data = data.data;
  }
}
