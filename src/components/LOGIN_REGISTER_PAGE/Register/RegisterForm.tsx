import React from 'react'
import Button from '../../Common/Button'
import EntryIcon from '../EntryIcon'
import {FaUserPlus} from 'react-icons/fa'
import InputDiv from '../InputDiv'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import togglePassword from '../../../functions/togglePassword'
import Informations from '../Informations'

const RegisterForm = () => {
   const submitRegister = (e: React.FormEvent): void => {

   }

   const togglePass= (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement

      togglePassword(input, t)
   }

   return (
      <form onSubmit={submitRegister} className="form register-form">

         <div className="wrap">

            <EntryIcon icon={<FaUserPlus />} />
            <Informations header='Create the account' text='Lorem ipsum dolor sit amet conqestaiur let' />

            <InputDiv cname='first' placeholder='Username' type='text' />
            <InputDiv placeholder='E-mail' type='text' />
            <InputDiv icon={{svg: <AiFillEye />, action: togglePass}} placeholder='Password' type='password' />

            <InputDiv cname='last' icon={{svg: <AiFillEye />, action: togglePass}} placeholder='Confirm assword' type='password' />

            <Button text='Register' />

         </div>

         <h6 className="reminder">Got the account? <Link to='/login'>Sign in here</Link></h6>

      </form>
   )
}

export default RegisterForm