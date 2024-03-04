export enum Method {
  'get',
  'post',
  'patch',
  'delete',
  'put',
}
export interface IHttpMethod {
  method?: string;
  url: string;
  data?: any;
  type?: string;
}
