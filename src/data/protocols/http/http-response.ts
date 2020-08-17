export enum HttpEstatusCode {
  noContent = 204,
  unathorized = 401
}

export type HttpResponse = {
  statusCode: HttpEstatusCode
  body?: any
}
