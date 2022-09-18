import React from 'react'
import {MdOutlineArticle} from 'react-icons/md'
import { IText } from '../../../interfaces/CoursePageInterfaces'

const DivInformations = ({children}: IText) => {
   return (
      <section className="hidden-informations">

         <span className="icon"><MdOutlineArticle /></span>

         <p>{children}</p>

      </section>
   )
}

export default DivInformations