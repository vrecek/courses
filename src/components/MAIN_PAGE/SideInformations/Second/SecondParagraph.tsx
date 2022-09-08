import React from 'react'
import PTag from '../PTag'
import {FcPlanner} from 'react-icons/fc'
import Cards from './Cards'

const SecondParagraph = () => {
   return (
      <article className="text-container">

         <h2>Lorem ispum dolor</h2>

         <PTag 
            icon={ <FcPlanner /> }
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio a non eveniet ratione sed repellat quibusdam facere laudantium neque, commodi saepe dolorum debitis expedita placeat modi praesentium quos explicabo exercitationem.' 
         />

         <Cards />

      </article>
   )
}

export default SecondParagraph