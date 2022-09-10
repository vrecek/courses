import React from 'react'
import FigureImage from '../../Common/FigureImage'
import SliderButtons from './SliderButtons'

const Slider = () => {
   return (
      <section className="slider">

         <div className="wrap">

            <div className="moving">

               <FigureImage source='https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg' altTxt='Slider' />
               <FigureImage source='https://wallpaperaccess.com/full/300068.jpg' altTxt='Slider' />
               <FigureImage source='https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg' altTxt='Slider' />

            </div>

         </div>

         <SliderButtons num={ 3 } />

      </section>
   )
}

export default Slider