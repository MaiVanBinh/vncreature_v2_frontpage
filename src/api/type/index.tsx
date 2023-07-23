export type TCreature = {
  author: number;
  avatar: string;
  created_at: string;
  description: string;
  family: number;
  group: number;
  id: number;
  name_latin: string;
  name_vn: string;
  order: number;
  redbook_level: string;
  species: number;
  assets?: TAsset[];
  speciesBelong?: TSpecies;
  setBelong?: TClassify;
  groupBelong?: TClassify;
  familyBelong?: TClassify;

};

export type TCreatureRedbook = {
  animals?: TCreature[];
  plants?: TCreature[];
  insect?: TCreature[];
};

export type TAsset = {
  id: number;
  url: string;
  author_name: string;
};
export type TPostCategory = {
  id: number;
  name_vn: string;
  name_en: string;
};
export type TPost = {
  id: number;
  title: string;
  description: string;
  assets: TAsset[];
  category: number;
  created_at: string;
  updated_at: string;
  categoryBelong?: TPostCategory;
};

export type TClassify = {
  id: number;
  name_vn: string;
  description?: string;
  name_latin: string;
};

export interface TFamily extends TClassify {}

export interface TSet extends TClassify {
  familiesBelong?: TFamily[];
}
export interface TGroup extends TClassify {
  setsBelong?: TSet[];
}
export type TSpecies = {
  id: number;
  name_vn: string;
  name_en: string;
  groups?: TGroup[];
  sets?: TSet[];
  family?: TFamily[];
}