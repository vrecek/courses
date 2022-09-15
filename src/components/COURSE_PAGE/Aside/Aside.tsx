import React from 'react'
import '../../../css/AsideCourse.css'
import { IAsideType } from '../../../interfaces/CoursePageInterfaces'
import HeaderInfo from './HeaderInfo'
import LessonList from './LessonList'

const Aside = ({type, courseList}: IAsideType) => {
   return (
      <aside className="aside-section">

         <HeaderInfo type={type} />
         <LessonList courseList={courseList} />

      </aside>
   )
}

export default Aside