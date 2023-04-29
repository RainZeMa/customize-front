import {
  ISwipersResponse,
  IGetGoodsRequest,
  IGetGoodsResponse,
} from "../interfaces";
import request from "./request";
const httpUrl: string = "/clothes";

export async function getSwipers() {
  const { data } = await request.get<ISwipersResponse>(httpUrl + "/swipers");
  return data;
}

export async function getGoods(params?: IGetGoodsRequest) {
  const { data } = await request.get<IGetGoodsResponse>(
    httpUrl + "/getClothes",
    {
      params,
    }
  );
  return data;
}
