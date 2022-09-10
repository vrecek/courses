import React from 'react'
import DropDown from '../../../functions/DropdownClass'
import OneOption from './OneOption'

const Options = () => {
   const [dd] = React.useState<DropDown[]>([...Array(3)].map(() => new DropDown()))

   return (
      <section className="options">

         <OneOption imageToSet='https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg' id={0} allDDs={[dd[1], dd[2]]} myDD={dd[0]} />
         <OneOption imageToSet='http://localhost:3000/static/media/side2.2b66bd1f17491a7d10cd.png' id={1} allDDs={[dd[0], dd[2]]} myDD={dd[1]} />
         <OneOption imageToSet='http://localhost:3000/static/media/header.daf6efea912214f34d6d.jpg' id={2} allDDs={[dd[0], dd[1]]} myDD={dd[2]} />

      </section>
   )
}

export default Options