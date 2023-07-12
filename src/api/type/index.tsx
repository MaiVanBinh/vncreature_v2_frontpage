export type TCreature = {
  author: number,
  avatar: string,
  created_at: string,
  description: string,
  family: number,
  group: number,
  id: number,
  name_latin: string,
  name_vn: string,
  order: number,
  redbook_level: string,
  species: number,
  assets: TAsset[]
}

export type TCreatureRedbook = {
  animals?: TCreature[],
  plants?: TCreature[],
  insect?: TCreature[]
}

export type TAsset = {
  id: number,
  url: string,
  author_name: string
}

export type TPost = {
  id: number,
  title: string,
  description: string,
  assets: TAsset[]
}