import React from 'react'
import FigureImage from '../../Common/FigureImage'
import discount from '../../../images/discount.jpg'

const DiscountImage = () => {
   return (
      <figure className="discount-image">

         <div className="line"></div>
         <FigureImage source={discount} />

      </figure>
   )
}

export default DiscountImage