import React from 'react'
import { UserContext } from '../../App'
import { LoadingCss } from '../../functions/Loading'
import { PossibleUser } from '../../interfaces/CommonInterfaces'
import { IConfirm } from '../../interfaces/OrderPageInterfaces'
import UserType from '../../interfaces/UserInterface'
import Button from '../Common/Button'

const Confirm = ({type, price, para, id}: IConfirm) => {
   const user: UserType = React.useContext(UserContext)!

   let isSame: boolean = false

   const hasAlreadyBoughtPrint = (): JSX.Element => {
      if(user.plan && user.plan === id) {
         isSame = true
         return <p className="red">You have already bought this plan.</p> 
      }
         

      if(user.plan) 
         return <p className="red">Are you sure? This will override your current plan.</p>


      return <></>
   }

   const finalizeOrder = (): void => {
      if(isSame) return
      
      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots()
      l.append(document.body)

      setTimeout(() => {
         const loggedUser: PossibleUser = JSON.parse(window.localStorage.getItem('user_logged') ?? 'null')
         const allUsers: UserType[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')

         if(!loggedUser || !allUsers.length) return

         const index: number = allUsers.findIndex(x => x.id === loggedUser.id)

         allUsers[index].plan = id
         loggedUser.plan = id

         window.localStorage.setItem('user_logged', JSON.stringify(loggedUser))
         window.localStorage.setItem('users', JSON.stringify(allUsers))

         l.remove()
         window.location.href = '/courses'
      }, 2000)
   }

   return (
      <section className="confirm">

         <div className='top'>

            <h1>Buy <span>{type} pack</span></h1>
            <h2 className="price">$ {price}</h2>
            <p>{para}</p>

         </div>

         <div className='bottom'>

            { hasAlreadyBoughtPrint() }
            <Button text='Finalize order' action={finalizeOrder} />

         </div>

      </section>
   )
}

export default Confirm