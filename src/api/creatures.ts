import request from "@/utils/request";
import { URL } from "./../utils/constants";
import { TClassify, TCreatureRedbook } from "./type";

const V_API = URL.V_API;
const listEndPoint = {
  creature: `${V_API}/creatures/get-list`,
  creatureRedbookStatic: `${V_API}/creatures/red-book-by-type`,
  creatureUrl: `${V_API}/creatures`
}

export type TClassifyLabel = 'groups' | 'sets' | 'family'
export enum ClassifyLabelEnum {
  groups = 'groups',
  sets = 'sets',
  family = 'family'  
}

export type TGetCreature = {
  specie: number,
  classify?: {
    name: TClassifyLabel,
    value: TClassify[]
  },
  isRedBook?: boolean
  keyword?: string,
  page: number,
  limit?: number;
}


export type TGetCreatureCustom = {
  specie: number,
  classify?: {
    name: TClassifyLabel
    value: number[]
  },
  isRedBook?: boolean
  keyword?: string,
  page: number,
  limit?: number;
}

export const getCreatures = async (payload: TGetCreature) => {
  try {
    const customPayload = {} as TGetCreatureCustom;
    if ( payload.keyword) {
      customPayload['keyword'] = payload.keyword;
    }
    if(payload.classify && payload.classify.name && payload.classify.value) {
      customPayload['classify'] = {
        name: payload.classify.name,
        value: payload.classify.value?.map(item => item.id)
      }
    }
    customPayload.isRedBook = payload.isRedBook;
    customPayload.page = payload.page;
    customPayload.specie = payload.specie;
    customPayload.limit = payload.limit || 20;

    const options = {
      method: 'POST',
      body: customPayload
    }
    const res = await request({url: listEndPoint.creature, options})
    return res;
  } catch (err) {
    // console.log("getCreatures id err", err);
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

export const getCreaturesById = async (id: number) => {
  try {
    const url = `${listEndPoint.creatureUrl}/${id}`;
    const creature = await request({url});
    return creature;
  } catch (err) {
    // console.log("getCreaturesById err", err)
  }
}