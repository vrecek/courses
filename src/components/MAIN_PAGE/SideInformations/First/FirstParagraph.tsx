import React from 'react'
import Button from '../../../Common/Button'
import {ImParagraphLeft} from 'react-icons/im'
import PTag from '../PTag'
import { scroller } from 'react-scroll'

const FirstParagraph = () => {
   const offset = { offset: -60 }
   
   return (
      <article className="text-container">

         <h2>Live examples</h2>

         <PTag 
            icon={ <ImParagraphLeft /> }
            text='Learn not only by plain text, but also by a live examples of code, images and videos, making learning easier and more comfortable and get through plenty of detailed lessons.' 
         />

         <Button action={() => scroller.scrollTo('usage', offset)} text='Learn more' />

      </article>
   )
}

export default FirstParagraph