import React from 'react'
import FigureImage from '../../Common/FigureImage'
import SliderButtons from './SliderButtons'
import i1 from '../../../images/preview/preview1.png'
import i2 from '../../../images/preview/preview2.png'
import i3 from '../../../images/preview/preview3.png'

const Slider = () => {
   return (
      <section className="slider">

         <div className="wrap">

            <div className="moving">

               <FigureImage source={i1} altTxt='Slider' />
               <FigureImage source={i2} altTxt='Slider' />
               <FigureImage source={i3} altTxt='Slider' />

            </div>

         </div>

         <SliderButtons num={ 3 } />

      </section>
   )
}

export default Slider