export interface ApiResp<T = any> {
  code: number;
  status: string;
  message?: string;
  data: T;
}
