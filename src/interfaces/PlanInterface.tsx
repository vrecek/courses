export interface IPlan {
   id: number,
   type: string,
   rate: number,
   price: number,
   infoPara: string,
   infoList: IHList[],
   offerPagePara: string,
   offerPageHeader: string,
   courseAside: IAsideCourse[]
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