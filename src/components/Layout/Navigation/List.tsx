import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INavLinks } from '../../../interfaces/NavigateInterfaces'

const List = () => {
   const n: NavigateFunction = useNavigate()
   const list: INavLinks[] = [
      { text: 'Homepage', url: '/' },
      { text: 'Offer', url: '/offer' },
      { text: 'Contact', url: '/contact' },

      { text: 'Join us', url: '/register', cname: 'register' },
      { text: 'Log in', url: '/login', cname: 'login' },
   ]

   return (
      <ul className="list">

         {
            list.map((x, i) => (
               <li key={i} onClick={() => n(x.url)} className={x.cname ?? ''}>
                  {x.text}
               </li>
            ))
         }

      </ul>
   )
}

export default List