import React from 'react'
import { UserContext } from '../../../App'
import { LoadingCss } from '../../../functions/Loading'
import UserType from '../../../interfaces/UserInterface'
import Button from '../../Common/Button'

const NoLessonSelected = () => {
   const loggedUser: UserType = React.useContext(UserContext)!

   const cancelSub = (): void => {
      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots()
      l.append(document.body)

      setTimeout(() => {
         l.remove()
         
         const allUsers: UserType[] = JSON.parse(window.localStorage.getItem('users')!)
         const index: number = allUsers.findIndex(x => x.plan === loggedUser.plan)

         allUsers[index].plan = null
         loggedUser.plan = null

         window.localStorage.setItem('user_logged', JSON.stringify(loggedUser))
         window.localStorage.setItem('users', JSON.stringify(allUsers))

         window.location.href = '/'
      }, 2000);
   }

   return (
      <section className="lesson no-selected">

         <div className='text'>
            
            <h1>Select lesson you want to get through</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque in porro? Eveniet porro eum nobis incidunt aspernatur laboriosam.</p>

         </div>

         <div className="cancel">

            <p>Lorem ipsuym dolor sit amet coqneatur elit</p>
            <Button action={cancelSub} text='Cancel subscription' />

         </div>

      </section>
   )
}

export default NoLessonSelected