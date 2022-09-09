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