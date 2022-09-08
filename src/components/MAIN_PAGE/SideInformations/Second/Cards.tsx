import React from 'react'
import OneCard from './OneCard'
import {BiPaint} from 'react-icons/bi'
import {HiOutlineServer} from 'react-icons/hi'
import {SiTypescript} from 'react-icons/si'

const Cards = () => {
   return (
      <section className="cards">

         <OneCard header='Frontend' icon={ <BiPaint /> } para='Learn how to design and create different webistes' />
         <OneCard header='Backend' icon={ <HiOutlineServer /> } para='Learn how backend works and how to create a server' />
         <OneCard header='Language' icon={ <SiTypescript /> } para="Learn language concepts and its usage" />

      </section>
   )
}

export default Cards