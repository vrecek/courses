import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import togglePassword from '../../../functions/togglePassword'
import Button from '../../Common/Button'
import EntryIcon from '../EntryIcon'
import InputDiv from '../InputDiv'
import LoginOptions from './LoginOptions'
import Informations from '../Informations'

const LoginForm = () => {
   const submitLogin = (e: React.FormEvent): void => {

   }

   const togglePass= (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement

      togglePassword(input, t)
   }

   return (
      <form onSubmit={submitLogin} className="form login-form">

         <div className="wrap">

            <EntryIcon icon={<FaUserShield />} />
            <Informations header='Sign into account' text='Lorem ipsum dolor sit amet conqestaiur let' />

            <InputDiv cname='first' placeholder='Username' type='text' />
            <InputDiv cname='last' icon={{svg: <AiFillEye />, action: togglePass}} placeholder='Password' type='password' />
            <LoginOptions />

            <Button text='Log in' />

         </div>

         <h6 className="reminder">No account? <Link to='/register'>Register here</Link></h6>

      </form>
   )
}

export default LoginForm