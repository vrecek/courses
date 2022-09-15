import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import DropDown from '../../../functions/DropdownClass'
import { IChapterComponent } from '../../../interfaces/CoursePageInterfaces'

const ChapterComponent = ({num, chapterName}: IChapterComponent) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const toggleLessons = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const arrow: HTMLElement = t.children[1] as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement
      
      dd.switchActive()
      dd.rotateArrow(arrow)
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <div onClick={toggleLessons} className="chapter">

         <h6>{num}. {chapterName}</h6>
         <span><MdOutlineKeyboardArrowDown /></span>

      </div>
   )
}

export default ChapterComponent