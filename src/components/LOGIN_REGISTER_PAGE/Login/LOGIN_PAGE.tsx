import React from 'react'
import LoginForm from './LoginForm'
import LoginImage from './LoginImage'
import '../../../css/LogReg.css'

const LOGIN_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="login">

         <main className="wrap">

            <LoginImage />
            <LoginForm />

         </main>

      </main>
   )
}

export default LOGIN_PAGE