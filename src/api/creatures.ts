import request from "@/utils/request";
import { URL } from "./../utils/constants";
import { TCreatureRedbook } from "./type";

const V_API = URL.V_API;
const listEndPoint = {
  creature: `${V_API}/creatures`,
  creatureRedbookStatic: `${V_API}/creatures/red-book-by-type`,
}

export const getCreatures = async (payload: any) => {
  try {
    const res = await request({url: listEndPoint.creature})
    return {};
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
    console.log("getCreaturesRedbookStatic id err", err);
    return {};
  }
};
