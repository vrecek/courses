import React from 'react'
import LoginForm from './LoginForm'
import LoginImage from './LoginImage'
import '../../../css/LogReg.css'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { UserContext } from '../../../App'

const LOGIN_PAGE = () => {
   window.scrollTo(0, 0)
   
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)
   React.useEffect(() => {
      if(user) n('/', { replace: true })
   }, [])

   if(!user)
   return (
      <main className="login">

         <main className="wrap">

            <LoginImage />
            <LoginForm />

         </main>

      </main>
   )

   return <></>
}

export default LOGIN_PAGE