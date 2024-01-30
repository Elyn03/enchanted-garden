export interface IFlower {
  id: number
  name: string
  description: string
  slug: string
  publishedAt: string
  tags: ITag[]
  image: Image
}

export interface ITag {
  id: number
  color: string
}

export interface Image {
  id: number
  name: string
  alternativeText: string
  width: number
  height: number
  url: string
}

export interface FlowersData {
  data: IFlower[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface FlowerData {
  data: IFlower
}