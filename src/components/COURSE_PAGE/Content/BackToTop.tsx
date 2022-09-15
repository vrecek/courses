import React from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi'

const BackToTop = () => {
   return (
      <div onClick={() => window.scrollTo(0, 0)} className="back-top">

         <h5>Back to top</h5>
         <span className="icon"><HiArrowNarrowUp /></span>

      </div>
   )
}

export default BackToTop