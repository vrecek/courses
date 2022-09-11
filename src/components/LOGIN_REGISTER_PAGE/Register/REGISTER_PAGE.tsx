import React from 'react'
import '../../../css/LogReg.css'
import RegisterForm from './RegisterForm'
import RegisterImage from './RegisterImage'

const REGISTER_PAGE = () => {
   return (
      <main className="register">

         <main className="wrap">

            <RegisterImage />
            <RegisterForm />

         </main>

      </main>
   )
}

export default REGISTER_PAGE