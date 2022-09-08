import React from 'react'
import ImageDiv from '../ImageDiv'
import side2 from '../../../../images/side2.png'
import '../../../../css/SideInfo.css'
import SecondParagraph from './SecondParagraph'

const SecondSideInfo = () => {
   return (
      <section className="side-info second">

         <ImageDiv source={ side2 } />
         <SecondParagraph />

      </section>
   )
}

export default SecondSideInfo