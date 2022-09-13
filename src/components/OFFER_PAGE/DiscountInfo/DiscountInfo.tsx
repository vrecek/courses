import React from 'react'
import '../../../css/DiscountInfo.css'
import DiscountImage from './DiscountImage'
import DiscountText from './DiscountText'

const DiscountInfo = () => {
   return (
      <section className="discount-info">

         <DiscountText />
         <DiscountImage />

      </section>
   )
}

export default DiscountInfo