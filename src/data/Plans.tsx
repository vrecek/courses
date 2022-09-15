import { IPlan } from "../interfaces/PlanInterface";
import Ch1e1 from "./Lessons/chapters/chapter1/Ch1e1";

const Plans: IPlan[] = [
   {
      id: 1,
      type: 'Beginner',
      price: 999,
      rate: 5,
      infoPara: 'For beginners, who are new to web experience',
      infoList: [
         { name: 'sd', present: true },
         { name: 'sd', present: true },
         { name: 's', present: false },
         { name: 's', present: false },
         { name: 's', present: false },
         { name: 's', present: false }
      ],
      offerPagePara: 'string',
      offerPageHeader: 'string',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Frontend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Backend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         }
      ]
   },

   {
      id: 2,
      type: 'Intermediate',
      price: 999,
      rate: 5,
      infoPara: 'Good if you want to expand your current knowledge',
      infoList: [
         { name: 'g', present: true },
         { name: 'g', present: true },
         { name: 'gg', present: true },
         { name: 'g', present: true },
         { name: 'gg', present: false },
         { name: 'fd', present: false }
      ],
      offerPagePara: 'string',
      offerPageHeader: 'string',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Frontend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Backend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         }
      ]
   },

   {
      id: 3,
      type: 'Exclusive',
      price: 999,
      rate: 5,
      infoPara: 'For those, who are looking for real knowledge',
      infoList: [
         { name: 'bv', present: true },
         { name: 'b', present: true },
         { name: 'bv', present: true },
         { name: 'cv', present: true },
         { name: 'b', present: true },
         { name: 'n', present: true }
      ],
      offerPagePara: 'string',
      offerPageHeader: 'string',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Frontend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Backend - Basic',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'Setup enviroment', component: <Ch1e1 /> },
            ]
         }
      ]
   }
]

export default Plans