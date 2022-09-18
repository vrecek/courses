import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { IFooterLinks } from '../../../interfaces/FooterInterfaces'

const FooterList = () => {
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)

   const links: IFooterLinks[] = [
      { name: 'Homepage', url: '/' },
      { name: 'Contact', url: '/contact' },
      { name: 'Offer', url: '/offer' },
   ]
   const acc: IFooterLinks[] = [
      { name: 'Sign in', url: '/login' },
      { name: 'Register', url: '/register' },
   ]

   const courseRedirect = () => n('/course', { 
      state: {
         planId: user?.plan ?? null,
         user: user ?? null
      } 
   })

   return (
      <section className="links">

         <ul>

            <li>Links</li>
            {
               links.map((x, i) => (
                  <li key={i} onClick={() => n(x.url)}>
                     {x.name}
                  </li>
               ))
            }

         </ul>
         
         <ul>

            <li>Account</li>
            {
               acc.map((x, i) => (
                  <li key={i} onClick={() => n(x.url)}>
                     {x.name}
                  </li>
               ))
            }

            <li onClick={courseRedirect}>My course</li>

         </ul>

      </section>
   )
}

export default FooterList