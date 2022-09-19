export interface IPlan {
   id: number,
   type: string,
   rate: number,
   price: number,
   infoPara: string,
   infoList: IHList[],
   infoDetails: IDetails
   offerPagePara: string,
   offerPageHeader: string,
   courseAside: IAsideCourse[],
}

export interface IDetails {
   language: string,
   lastUpdated: string
}

export interface IAsideCourse {
   chapter: string,
   lessons: ILesson[]
}

export interface ILesson {
   name: string,
   component: JSX.Element
}

export interface IHList {
   name: string,
   present: boolean
}