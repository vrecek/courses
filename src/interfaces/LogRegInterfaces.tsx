import UserType from "./UserInterface"

export interface IDivInput {
   placeholder: string,
   type: 'text' | 'password',
   cname?: string,
   icon?: {
      svg: JSX.Element,
      action: React.MouseEventHandler
   },
}

export interface IDetails {
   text: string,
   header: string
}

export interface IExist {
   msg: string,
   exists: boolean
}

export interface IRegistered {
   exists: boolean,
   user: null | UserType
}