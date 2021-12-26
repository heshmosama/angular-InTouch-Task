import { Rating } from "./rating.model";

export interface Products {
    id: number
    name: string
    brand: string
    type: string
    price: number
    description: string
    rating: Rating[]
  }