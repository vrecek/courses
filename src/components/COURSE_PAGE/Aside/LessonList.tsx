import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IAsideListSection } from '../../../interfaces/CoursePageInterfaces'
import ChapterComponent from './ChapterComponent'
import LessonsComponent from './LessonsComponent'

const LessonList = ({courseList}: IAsideListSection) => {
   return (
      <ul className="outer-ul">

         {
            courseList.map((x, i) => (
               <li key={i} className="outer-li">

                  <ChapterComponent num={i + 1} chapterName={x.chapter} />

                  <LessonsComponent chNum={i + 1} lessons={x.lessons} />

               </li>
            ))
         }

      </ul>
   )
}

export default LessonList