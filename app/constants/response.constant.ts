import { Response } from "express";
import i18n = require("i18n");

interface ResponseSuccessDto {
  code?: number;
  message?: string;
  data?: any;
}

interface ResponseErrorDto {
  code?: number;
  error_code: string;
  message?: string;
  data?: any;
}

export default class ResponseConstant {
  static success(data: ResponseSuccessDto, res: Response) {
    const newData = {
      status_code: data.code ? data.code : 200,
      message: data.message ? data.message : "SUCCESS",
      success: true,
      data: data.data ? data.data : undefined,
    };

    res.status(newData.status_code).json(newData);
    res.end();
  }

  static error(data: ResponseErrorDto, res: Response) {
    const newData = {
      status_code: data.code ? data.code : 500,
      error_code: data.error_code ? data.error_code : null,
      message: data.message ? data.message : i18n.__("general.error_try_again"),
      success: false,
      data: data.data ? data.data : {},
    };

    res.status(newData.status_code).json(newData);
    res.end();
  }

  static dataPagination(result: any[], page: any, limit: any) {
    return {
      data: result,
      nextPage: result.length !== Number(limit) ? Number(page) : Number(page) + 1,
      previousPage: Number(page) === 0 ? 0 : Number(page) - 1,
      currentPage: Number(page),
      totalPerPage: result.length,
    };
  }
}
