import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { INavLinks } from '../../../interfaces/NavigateInterfaces'
import UserType from '../../../interfaces/UserInterface'

const List = () => {
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)


   const pushUserLinks = (): void => {
      user
      ? 
      list.push({ text: 'Logout', action: logoutFunc, cname: 'logout' })
      :
      list.push({ text: 'Join us', action: () => n('/register'), cname: 'register' },
                { text: 'Log in', action: () => n('/login'), cname: 'login' })
   }
   const pushPlanLinks = (): void => {
      if(user?.plan) 
         list.push({ text: 'My course', action: redirectPlanFunc, cname: 'plan' })
   }


   const redirectPlanFunc = (): void => {
      n('/course', {
         state: {
            planId: user!.plan,
            user
         }
      })
   }
   const logoutFunc = (): void => {
      if(!user) return

      const allUsers: UserType[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
      if(!allUsers.length) return

      const index: number = allUsers.findIndex(x => x.id === user.id)
      allUsers[index].logged = false

      window.localStorage.setItem('users', JSON.stringify(allUsers))
      window.localStorage.removeItem('user_logged')

      window.location.href = '/courses'
   }

   const list: INavLinks[] = [
      { text: 'Homepage', action: () => n('/') },
      { text: 'Offer', action: () => n('/offer') },
      { text: 'Contact', action: () => n('/contact') },
   ]

   pushUserLinks()
   pushPlanLinks()   
   
   return (
      <ul className="list">

         {
            list.map((x, i) => (
               <li 
               key={i} 
               onClick={x.action} 
               className={x.cname ?? ''}
               >
                  {x.text}
               </li>
            ))
         }

      </ul>
   )
}

export default List