import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { INavLinks } from '../../../interfaces/NavigateInterfaces'
import UserType from '../../../interfaces/UserInterface'

const List = () => {
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)

   const logoutFunc = (): void => {
      if(!user) return

      const allUsers: UserType[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
      if(!allUsers.length) return

      const index: number = allUsers.findIndex(x => x.id === user.id)
      allUsers[index].logged = false

      window.localStorage.setItem('users', JSON.stringify(allUsers))
      window.localStorage.removeItem('user_logged')

      window.location.reload()
   }

   const list: INavLinks[] = [
      { text: 'Homepage', action: () => n('/') },
      { text: 'Offer', action: () => n('/offer') },
      { text: 'Contact', action: () => n('/contact') },
   ]

   user
   ? 
   list.push({ text: 'Logout', action: logoutFunc, cname: 'logout' })
   :
   list.push({ text: 'Join us', action: () => n('/register'), cname: 'register' },
             { text: 'Log in', action: () => n('/login'), cname: 'login' })

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