import UserType from "./UserInterface"

export interface IFigure {
   source: string,
   cname?: string,
   altTxt?: string
}

export interface IButton {
   text: string,
   additional?: JSX.Element | string | number,
   cname?: string,
   action?: React.MouseEventHandler
}

export type Ref = React.RefObject<HTMLDivElement>

export interface IRef {
   reference: Ref
}

export type HE = HTMLCollectionOf<HTMLElement>
export type Inputs = HTMLCollectionOf<HTMLInputElement>
export type PossibleUser = UserType | null