import React from 'react'
import {BsFacebook, BsGithub} from 'react-icons/bs'
import {ImMail4} from 'react-icons/im'

const Socials = () => {
   return (
      <ul className="socials">

         <li><BsFacebook /></li>
         <li><BsGithub /></li>
         <li><ImMail4 /></li>

      </ul>
   )
}

export default Socials