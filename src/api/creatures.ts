import request from "@/utils/request";
import { URL } from "./../utils/constants";
import { TCreatureRedbook } from "./type";
import QueryString from "qs";

const V_API = URL.V_API;
const listEndPoint = {
  creature: `${V_API}/creatures/get-list`,
  creatureRedbookStatic: `${V_API}/creatures/red-book-by-type`,
}

export type TClassifyLabel = 'groups' | 'sets' | 'family'

export type TGetCreature = {
  specie: number,
  classify?: {
    name: TClassifyLabel
    value: number[]
  },
  isRedBook?: boolean
  keyword?: string,
  page: number,
}

export const getCreatures = async (payload: TGetCreature) => {
  try {
    const options = {
      method: 'POST',
      body: payload
    }
    const res = await request({url: listEndPoint.creature, options})
    return res;
  } catch (err) {
    console.log("getCreatures id err", err);
    return {};
  }
};


export const getCreaturesRedbookStatistic = async () => {
  try {
    const res = await request({url: listEndPoint.creatureRedbookStatic})
    return res.data as TCreatureRedbook;
  } catch (err) {
    return {};
  }
};
