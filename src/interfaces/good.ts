import { ApiResp } from "./libs";

export interface IGood {
  _id: string;
  title: string;
  type: string;
  pic: string;
  price: number;
  fire?: string;
  label: string;
  createdAt: Date;
  storeNum: number;
}

export interface ISwiperItem {
  _id: string;
  pic: string;
}

export interface ISwipersResponse extends ApiResp {
  data: {
    items: ISwiperItem[];
  };
}

export interface IGetGoodsRequest {
  current?: number;
  pageSize?: number;
  title?: string;
  type?: string;
  prevId?: string;
}

export interface IGetGoodsResponse extends ApiResp {
  data: {
    items: IGood[];
    total: number;
  };
}
