import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import '../../../css/LogReg.css'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import RegisterForm from './RegisterForm'
import RegisterImage from './RegisterImage'

const REGISTER_PAGE = () => {
   window.scrollTo(0, 0)
   
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)
   React.useEffect(() => {
      if(user) n('/', { replace: true })
   }, [])

   if(!user)
   return (
      <main className="register">

         <main className="wrap">

            <RegisterImage />
            <RegisterForm />

         </main>

      </main>
   )

   return <></>
}

export default REGISTER_PAGE