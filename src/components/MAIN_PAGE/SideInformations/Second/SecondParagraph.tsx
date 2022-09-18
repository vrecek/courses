import React from 'react'
import PTag from '../PTag'
import {ImParagraphLeft} from 'react-icons/im'
import Cards from './Cards'

const SecondParagraph = () => {
   return (
      <article className="text-container">

         <h2>All necessary tools</h2>

         <PTag 
            icon={ <ImParagraphLeft /> }
            text='Besides plain language, you will also learn all libraries and frameworks required to a modern web development that will make your job easier and more interesting' 
         />

         <Cards />

      </article>
   )
}

export default SecondParagraph