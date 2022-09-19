import React from 'react'
import Button from '../../Common/Button'
import EntryIcon from '../EntryIcon'
import {FaUserPlus} from 'react-icons/fa'
import InputDiv from '../InputDiv'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import togglePassword from '../../../functions/togglePassword'
import Informations from '../Informations'
import { Inputs } from '../../../interfaces/CommonInterfaces'
import AppendResult from '../../../functions/AppendText'
import UserType from '../../../interfaces/UserInterface'
import { IExist } from '../../../interfaces/LogRegInterfaces'
import { LoadingCss } from '../../../functions/Loading'
import appendResponse from '../../../functions/appendResponse'

const RegisterForm = () => {
   const validateCredentials = (inputs: string[]): string => {
      const [user, mail, pass, confPass] = inputs

      if(!user) return 'Please specify username'
      else if(user.length < 3 || user.length > 16) return 'Username must be between 4 and 16 characters'

      else if(!mail) return 'Please specify mail address'
      else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mail)) return 'Mail is incorrect'

      else if(!pass) return 'Please enter password'
      else if(pass.length < 4) return 'Password must have minimum 4 characters'
      else if(pass !== confPass) return 'Passwords are different'

      return ''
   } 

   const doesUserExist = (currentUsers: UserType[], username: string, mail: string): IExist => {
      let finalObject: IExist = {
         msg: '',
         exists: false
      }

      if(currentUsers.some(x => x.username === username)) {
         finalObject = { msg: 'Username already exists', exists: true }
      }
      else if(currentUsers.some(x => x.mail === mail)) {
         finalObject = { msg: 'Mail address already exists', exists: true }
      }

      return finalObject
   }
   
   const submitRegister = (e: React.FormEvent): void => {
      e.preventDefault()
      
      const t: HTMLFormElement = e.target as HTMLFormElement
      const elements: HTMLInputElement[] = Array.from(t.elements as Inputs)

      const values: string[] = elements.map(x => x.value)
      const ar: AppendResult = new AppendResult('h6', 'failure')

      let msg: string = validateCredentials(values)

      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleDots({
         position: 'containerWidth'
      })
      l.append(t)

      setTimeout(() => {
         l.remove()

         if(msg) {
            appendResponse(ar, msg, t)
            return
         }
   
         const User: UserType = {
            id: Date.now().toString() + Math.random().toString(36).replace('0.', ''),

            logged: false,
            plan: null,
   
            username: values[0],
            mail: values[1],
            password: values[2]
         }
   
         const actualUsers: UserType[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
         const doesExist: IExist = doesUserExist(actualUsers, User.username, User.mail)
   
         if(doesExist.exists) {
            appendResponse(ar, doesExist.msg, t)
            return
         }
   
         window.localStorage.setItem('users', JSON.stringify([...actualUsers, User]))
         appendResponse(ar, 'Successfully created! You can sign in now', t, 'success')
      }, 1000)
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