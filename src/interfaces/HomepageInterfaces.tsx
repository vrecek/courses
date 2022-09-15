import DropDown from "../functions/DropdownClass"
import { IHList } from "./PlanInterface"

export interface ISideParagraphTag {
   text: string,
   icon: JSX.Element
}

export interface ICard {
   icon: JSX.Element,
   para: string,
   header: string
}

export interface IPlanList {
   list: IHList[],
   header: string
}

export interface IHomepagePlan {
   price: number,
   list: IHList[],
   listHeader: string,
   title: string,
   id: number
}

export interface IOption {
   myDD: DropDown,
   allDDs: DropDown[],
   id: number,
   imageToSet: string
}