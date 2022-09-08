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