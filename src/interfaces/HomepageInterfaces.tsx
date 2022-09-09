export interface ISideParagraphTag {
   text: string,
   icon: JSX.Element
}

export interface ICard {
   icon: JSX.Element,
   para: string,
   header: string
}

export interface IListType {
   type: 'active' | 'inactive',
   text: string,
}

export interface IPlanList {
   list: IListType[],
   header: string
}

export interface IPlan {
   price: number,
   list: IListType[],
   listHeader: string,
   title: string
}