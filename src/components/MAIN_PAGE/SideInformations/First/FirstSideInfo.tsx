import React from 'react'
import ImageDiv from '../ImageDiv'
import FirstParagraph from './FirstParagraph'
import side1 from '../../../../images/side1.gif'
import '../../../../css/SideInfo.css'

const FirstSideInfo = () => {
   return (
      <section className="side-info first">

         <FirstParagraph />
         <ImageDiv source={ side1 } />

      </section>
   ) 
}

export default FirstSideInfo