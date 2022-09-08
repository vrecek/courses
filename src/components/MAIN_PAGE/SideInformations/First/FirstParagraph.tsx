import React from 'react'
import Button from '../../../Common/Button'
import { ImParagraphLeft } from 'react-icons/im'
import PTag from '../PTag'

const FirstParagraph = () => {
   return (
      <article className="text-container">

         <h2>Lorem ispum dolor</h2>

         <PTag 
            icon={ <ImParagraphLeft /> }
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio a non eveniet ratione sed repellat quibusdam facere laudantium neque, commodi saepe dolorum debitis expedita placeat modi praesentium quos explicabo exercitationem.' 
         />

         <Button text='Learn more' />

      </article>
   )
}

export default FirstParagraph