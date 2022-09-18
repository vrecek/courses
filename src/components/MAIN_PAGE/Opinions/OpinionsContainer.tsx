import React from 'react'
import { IOpinion } from '../../../interfaces/HomepageInterfaces'
import Opinion from './Opinion'
import user1 from '../../../images/opinions/user1.jpg'
import user2 from '../../../images/opinions/user2.jpg'
import user3 from '../../../images/opinions/user3.jpg'
import user4 from '../../../images/opinions/user4.jpg'
import user5 from '../../../images/opinions/user5.jpg'
import user6 from '../../../images/opinions/user6.jpg'

const OpinionsContainer = () => {
   const opinions: IOpinion[] = [
      {
         opinion: {
            text: 'As a beginner this is very easy to understand, but i wish there was a some videos. I definietly recommend this',
            header: 'Easy to understand'
         },

         user: {
            name: 'Asim Macgregor',
            occupation: 'Engineer',
            avatar: user1
         },
         
         rate: 4,
      },

      {
         opinion: {
            text: 'I wanted to learn Typescript. But what I have seen is amazing. There are details that I have never seen even in a multiple TS books.',
            header: 'Very detailed'
         },

         user: {
            name: 'Tiah Lawson',
            occupation: 'Math teacher',
            avatar: user2
         },
         
         rate: 5,
      },

      {
         opinion: {
            text: 'I like design of chapters and lessons as a dropdown. Easy to navigate and easy to read.',
            header: 'Good design'
         },

         user: {
            name: 'Grant Gilmore',
            occupation: 'Senior dev',
            avatar: user3
         },
         
         rate: 5,
      },

      {
         opinion: {
            text: 'When i forget about something, I like to come here. Easy to navigate and easy to explain with correct examples.',
            header: 'Good explanation'
         },

         user: {
            name: 'Steffan Steadman',
            occupation: 'Freelancer',
            avatar: user4
         },
         
         rate: 4,
      },

      {
         opinion: {
            text: 'Before I became a backend developer this helped me so much. It explains all necessary concepts which are required in every project.',
            header: 'Incredibly helpful'
         },

         user: {
            name: 'Domonic Giles',
            occupation: 'Backend dev',
            avatar: user5
         },
         
         rate: 5,
      },

      {
         opinion: {
            text: 'When I wanted to deploy my project on a some hosting, I did not know how. This explained me with all details and I have chosen my hosting service.',
            header: 'Everything explained'
         },

         user: {
            name: 'Wiktor Mcmillan',
            occupation: 'Fullstack dev',
            avatar: user6
         },
         
         rate: 5,
      }
   ]

   return (
      <section className="container">

         {
            opinions.map((x, i) => (
               <Opinion 
                  key={i}
                  user={x.user}
                  rate={x.rate}
                  opinion={x.opinion}
               />
            ))
         }

      </section>
   )
}

export default OpinionsContainer