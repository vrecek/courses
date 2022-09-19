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
import { Inputs } from '../../../interfaces/CommonInterfaces'
import { IRegistered } from '../../../interfaces/LogRegInterfaces'
import AppendResult from '../../../functions/AppendText'
import appendResponse from '../../../functions/appendResponse'
import UserType from '../../../interfaces/UserInterface'
import { LoadingCss } from '../../../functions/Loading'

const LoginForm = () => {
   const isRegistered = (logUsername: string, logPassword: string): IRegistered => {
      let returnObj: IRegistered = {
         user: null,
         exists: false
      }

      const registeredUsers: UserType[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
      
      for(let x of registeredUsers) {
         const {username, password} = x

         if(username === logUsername && password === logPassword) {
            returnObj = {
               user: x,
               exists: true
            }

            const index: number = registeredUsers.findIndex(y => y.id === x.id)
            registeredUsers[index].logged = true

            window.localStorage.setItem('users', JSON.stringify(registeredUsers))
            
            break
         }
      }

      return returnObj
   }
   
   const submitLogin = (e: React.FormEvent): void => {
      e.preventDefault()

      const t: HTMLFormElement = e.target as HTMLFormElement
      const elements: HTMLInputElement[] = Array.from(t.elements as Inputs)
      const btn: HTMLElement = elements[elements.length - 1]

      const ar: AppendResult = new AppendResult('h6', 'success')
      const doesExist: IRegistered = isRegistered(elements[0].value, elements[1].value)

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({ position: 'containerWidth' })
      l.append(t)
 
      setTimeout(() => {
         l.remove()

         if(!doesExist.exists) {
            appendResponse(ar, 'Username or password is incorrect', btn, 'failure')
            return
         }
   
         appendResponse(ar, 'Successfully logged in', btn)
         window.localStorage.setItem('user_logged', JSON.stringify(doesExist.user))

         setTimeout(() => window.location.href = '/courses', 500)
      }, 1000)
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