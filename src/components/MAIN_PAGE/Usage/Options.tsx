import React from 'react'
import DropDown from '../../../functions/DropdownClass'
import { IOption } from '../../../interfaces/HomepageInterfaces'
import OneOption from './OneOption'

const Options = () => {
   const [dd] = React.useState<DropDown[]>([...Array(3)].map(() => new DropDown()))

   const optionsArray: IOption[] = [
      {
         imageToSet: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg',
         id: 0,
         allDDs: [dd[1], dd[2]],
         myDD: dd[0],
         para: 'Start your web experience by buying an any plan you want to. You can cancel your purchase any time you want, depends how many lessons you have passed.',
         header: 'Buy any plan you want'
      },
      
      {
         imageToSet: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg',
         id: 1,
         allDDs: [dd[0], dd[2]],
         myDD: dd[1],
         para: 'Learn new things by completing our lessons. We recommend taking notes and trying your new abilities you have gained on your own by tring to create your own projects',
         header: 'Select a lesson you want to check'
      },

      {
         imageToSet: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg',
         id: 2,
         allDDs: [dd[0], dd[1]],
         myDD: dd[2],
         para: 'Continue your course till the end by passing more and more lessons. If you did that, you surely gained a real knowledge about web developing.',
         header: 'Proceed to the end'
      }
   ]

   return (
      <section className="options">

         {
            optionsArray.map((x, i) => (
               <OneOption 
                  key={i}
                  imageToSet={x.imageToSet}
                  id={x.id} 
                  allDDs={x.allDDs} 
                  myDD={x.myDD}
                  header={x.header} 
                  para={x.para}
               />
            ))
         }

      </section>
   )
}

export default Options