import React from 'react'
import FigureImage from '../../Common/FigureImage'

const ImageDiv = ({ source }: { source: string }) => {
   return (
      <figure className="image-div">

         <FigureImage source={ source } altTxt='Image information' />

      </figure>
   )
}

export default ImageDiv