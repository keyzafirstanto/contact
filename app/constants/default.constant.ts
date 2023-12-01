export default class DefaultConstant {
  static profileImage = "https://res.cloudinary.com/dralco12y/image/upload/v1694534876/general/oh3jmozsduqccp4zpdrr.png";

  static metadata(request: any, total: number) {
    return {
      page: request.page,
      limit: request.limit,
      total: total,
      is_next: total > request.page * request.limit,
      is_previous: request.page > 1,
    };
  }
}
