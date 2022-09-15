import React from 'react'
import { NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../../css/Course.css'
import Plans from '../../data/Plans'
import { defaultCourseHook, defaultVerifyHook, ICourseHook, ICourseState, IVerifyHook } from '../../interfaces/CoursePageInterfaces'
import Aside from './Aside/Aside'
import Content from './Content/Content'

const COURSE_PAGE = () => {
   const [courseHook, setHook] = React.useState<IVerifyHook>(defaultVerifyHook)
   const [selectedLesson, setLesson] = React.useState<ICourseHook>(defaultCourseHook)

   const location = useLocation()
   const params = useParams()
   const state: ICourseState = location.state as ICourseState
   const n: NavigateFunction = useNavigate()

   React.useEffect(() => {
      if(!state || !state?.user?.plan || state.user.plan !== state?.planId) {
         n('/', { replace: true })
         return
      }

      setHook({
         authorized: true,
         course: Plans.filter(x => x.id === state.planId)[0]
      })
   }, [])

   React.useEffect(() => {
      const [chapter, lesson] = Object.values(params).map(x => parseInt(x ?? 'null'))

      if(!chapter || !lesson || !courseHook?.course) return

      try {
         const chapterObject = courseHook.course.courseAside[chapter - 1]
         const lessonObject = chapterObject.lessons[lesson - 1]

         setLesson({
            component: lessonObject.component,
            chapter: { name: chapterObject.chapter, num: chapter },
            lesson: { name: lessonObject.name, num: lesson }
         })

      }catch { return }
      
   }, [location])

   if(courseHook?.authorized && courseHook?.course) {
      const {courseAside, type} = courseHook.course

      return (
         <main className="course-page">
   
            <Aside type={type} courseList={courseAside} />
            <Content lessonContent={selectedLesson} />
   
         </main>
      )
   }
   

   return <></>
}

export default COURSE_PAGE