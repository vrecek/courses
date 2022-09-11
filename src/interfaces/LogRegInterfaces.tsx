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