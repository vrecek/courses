import React from 'react'
import Button from '../Common/Button'
import ContactInput from './ContactInput'
import TextArea from './TextArea'
import AppendResult from '../../functions/AppendText'
import { Inputs } from '../../interfaces/CommonInterfaces'
import { LoadingCss } from '../../functions/Loading'

const ContactForm = () => {
   const submitMsg = (e: React.FormEvent): void => {
      e.preventDefault()

      const t: HTMLFormElement = e.target as HTMLFormElement
      const elements: HTMLInputElement[] = Array.from(t.elements as Inputs)

      const texts: string[] = elements.slice(0, 4).map(x => x.value)

      const ar: AppendResult = new AppendResult('h6', 'true')
      const l: LoadingCss = new LoadingCss
      l.defaultStyleDots({
         position: 'containerWidth',
         backgroundClr: 'rgb(230, 230, 230, .8)'
      })
      l.append(t)

      if(texts.some(x => !x)) {
         ar.setClass = 'false'
         ar.setMessage = 'Please fill all fields'

      }else ar.setMessage = 'Succesfully sent.'

      setTimeout(() => {
         l.remove()
         ar.appendTo(elements[elements.length - 1], 3)
      }, 1500)
   }

   return (
      <form onSubmit={submitMsg}>

         <ContactInput header='Username' />
         <ContactInput header='Mail' />
         <ContactInput header='Subject' />  
         <TextArea />

         <Button text='Submit' />

      </form>
   )
}

export default ContactForm