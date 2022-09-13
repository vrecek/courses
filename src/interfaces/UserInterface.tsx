export default interface UserType {
   id: string,
   logged: boolean,

   username: string,
   password: string,
   mail: string,

   plan: null | 1 | 2 | 3
}