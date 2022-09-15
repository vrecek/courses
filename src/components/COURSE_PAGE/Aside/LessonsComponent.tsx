import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ILessonComponent } from '../../../interfaces/CoursePageInterfaces'

const LessonsComponent = ({lessons, chNum}: ILessonComponent) => {
   const n: NavigateFunction = useNavigate()

   const changeUrl = (e: React.MouseEvent, lessonNum: number): void => {
      const t: HTMLElement = e.target as HTMLElement
      const allLi: Element[] = Array.from(document.getElementsByClassName('inner-li'))

      for(let x of allLi) x.classList.remove('active')
      t.classList.add('active')

      n(`/course/${chNum}/${lessonNum}`)
   }

   return (
      <ul className="inner-ul">

         {
            lessons.map((x, i) => (

               <li onClick={(e) => changeUrl(e, i + 1)} key={i} className="inner-li">

                  {i + 1}. {x.name}

               </li>

            ))
         }

      </ul>
   )
}

export default LessonsComponent