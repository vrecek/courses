import React from 'react'
import '../../../css/ContentCourse.css'
import { ICourseHook } from '../../../interfaces/CoursePageInterfaces'
import CurrentLessonText from './CurrentLessonText'

const Content = ({lessonContent}: {lessonContent: ICourseHook}) => {
   const {component, lesson, chapter} = lessonContent

   return (
      <main className="content">

         {
            (lesson.num && chapter.num) 
            ?
            <CurrentLessonText chapterNum={chapter.num} lessonNum={lesson.num} lessonName={lesson.name} />
            :
            <></>
         }

         {component}

      </main>
   )
}

export default Content