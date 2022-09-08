import React from 'react'
import { IFigure } from '../../interfaces/CommonInterfaces'

const FigureImage = ({cname, source, altTxt}: IFigure) => {
   return (
      <figure className={ cname ?? '' }>
         
         <img src={ source } alt={ altTxt } />

      </figure>
   )
}

export default FigureImage