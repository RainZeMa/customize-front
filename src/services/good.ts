import { AxiosResponse } from "axios";
import {
  ISwipersResponse,
  IGetGoodsRequest,
  IGetGoodsResponse,
  IGood,
  IGetGoodInfo,
} from "../interfaces";
import request from "./request";
const httpUrl: string = "/clothes";

export async function getSwipers() {
  const { data } = await request.get<ISwipersResponse>(httpUrl + "/swipers");
  return data;
}

export async function getGoods(params?: IGetGoodsRequest) {
  const { data } = await request.get<IGetGoodsResponse>(httpUrl + "/getGoods", {
    params,
  });
  return data;
}

export async function getGoodInfo(_id: string) {
  const { data } = await request.get<IGetGoodInfo>(
    httpUrl + `/getGoodInfo/${_id}`
  );
  return data;
}
