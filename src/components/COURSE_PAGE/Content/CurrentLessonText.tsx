import React from 'react'
import { ICurrentLessonText } from '../../../interfaces/CoursePageInterfaces'

const CurrentLessonText = ({chapterNum, lessonNum, lessonName}: ICurrentLessonText) => {
   return (
      <section className="current-info">

         <h2>CHAPTER {chapterNum}</h2>
         <h1>{lessonNum}. {lessonName}</h1>

      </section>
   )
}

export default CurrentLessonText