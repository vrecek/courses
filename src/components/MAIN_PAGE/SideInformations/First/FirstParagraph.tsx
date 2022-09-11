import React from 'react'
import Button from '../../../Common/Button'
import {ImParagraphLeft} from 'react-icons/im'
import PTag from '../PTag'
import { scroller } from 'react-scroll'

const FirstParagraph = () => {
   const offset = { offset: -60 }
   
   return (
      <article className="text-container">

         <h2>Lorem ispum dolor</h2>

         <PTag 
            icon={ <ImParagraphLeft /> }
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio a non eveniet ratione sed repellat quibusdam facere laudantium neque, commodi saepe dolorum debitis expedita placeat modi praesentium quos explicabo exercitationem.' 
         />

         <Button action={() => scroller.scrollTo('usage', offset)} text='Learn more' />

      </article>
   )
}

export default FirstParagraph