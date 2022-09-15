import UserType from "./UserInterface";

export interface IOrderState {
   user: UserType,
   id: 1 | 2 | 3,
}

export interface IConfirm {
   price: number,
   type: string,
   para: string,
   id: number
}