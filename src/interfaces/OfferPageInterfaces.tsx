import { IHList } from "./PlanInterface"

export interface IOfferTop {
   price: number,
   type: string,
   id: number,
   para: string,
   list: IHList[]
}

export interface IOfferBottom {
   header: string,
   bottomText: string,
   rate: number
}

export interface IOffer extends IOfferTop, IOfferBottom {}