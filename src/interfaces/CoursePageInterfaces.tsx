import NoLessonSelected from "../components/COURSE_PAGE/Content/NoLessonSelected";
import { IAsideCourse, ILesson, IPlan } from "./PlanInterface";
import UserType from "./UserInterface";

export interface ICourseState {
   planId: number,
   user: UserType
}

export interface IVerifyHook {
   course: IPlan | null,
   authorized: boolean
}

export const defaultVerifyHook: IVerifyHook = {
   course: null,
   authorized: false
}

export interface IAsideType extends IAsideListSection {
   type: string,
}

export interface IAsideListSection {
   courseList: IAsideCourse[]
}

export interface IChapterComponent {
   num: number,
   chapterName: string
}

export interface ILessonComponent {
   chNum: number,
   lessons: ILesson[]
}

export interface ICourseCurrentLesson {
   name: string,
   num: number
}

export interface ICourseHook {
   component: JSX.Element,
   chapter: ICourseCurrentLesson,
   lesson: ICourseCurrentLesson
}
export const defaultCourseHook: ICourseHook = {
   component: <NoLessonSelected />,
   chapter: { name: '', num: 0 },
   lesson: { name: '', num: 0 }
}

export interface ICurrentLessonText {
   chapterNum: number, 
   lessonNum: number, 
   lessonName: string
}

export interface IText {
   children: string
}

export interface ICodeText extends IText {
   asSpan?: boolean,
   color?: string
}