import { IPlan } from "../interfaces/PlanInterface";
import Ch1e1 from "./Lessons/chapters/chapter1/Ch1e1";

const Plans: IPlan[] = [
   {
      id: 1,
      type: 'Beginner',
      price: 20,
      rate: 5,
      infoPara: 'For beginners, who are new to web experience',
      infoList: [
         { name: 'Access to the course', present: true },
         { name: 'Live code editor', present: false },
         { name: 'Updating new features', present: false },
         { name: 'All language aspects', present: false },
         { name: 'Hosting services', present: false },
         { name: 'Personal mentor', present: false }, 
      ],
      infoDetails: {
         language: 'English',
         lastUpdated: '11.09.2022'
      },
      offerPagePara: 'Nam pulvinar arcu ac porttitor mattis. Phasellus eget ultrices nisi, facilisis interdum nisl. Phasellus vestibulum sagittis nisl ac porttitor. Sed dignissim mattis mollis. Maecenas ac euismod purus. Pellentesque luctus massa sed metus eleifend semper. Proin nisl lorem.',
      offerPageHeader: 'For beginners',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'VSC shortcuts', component: <Ch1e1 /> },
               { name: 'Install extensions', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'HTML - Basic',
            lessons: [
               { name: 'Basic template', component: <Ch1e1 /> },
               { name: 'Box model', component: <Ch1e1 /> },
               { name: 'Basic tags', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'CSS - Basic',
            lessons: [
               { name: 'Style text', component: <Ch1e1 /> },
               { name: 'Style images', component: <Ch1e1 /> },
               { name: 'Position', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'JavaScript - Basic',
            lessons: [
               { name: 'Create variables', component: <Ch1e1 /> },
               { name: 'Select DOM elements', component: <Ch1e1 /> },
               { name: 'Loop, if', component: <Ch1e1 /> },
               { name: 'Objects', component: <Ch1e1 /> },
            ]
         }
      ]
   },

   {
      id: 2,
      type: 'Intermediate',
      price: 30,
      rate: 5,
      infoPara: 'Good if you want to expand your current knowledge',
      infoList: [
         { name: 'Access to the course', present: true },
         { name: 'Live code editor', present: true },
         { name: 'Updating new features', present: true },
         { name: 'All language aspects', present: false },
         { name: 'Hosting services', present: false },
         { name: 'Personal mentor', present: false }, 
      ],
      infoDetails: {
         language: 'English',
         lastUpdated: '12.08.2022'
      },
      offerPagePara: 'Donec non efficitur odio, quis condimentum est. Nulla vitae ultrices velit, at pharetra nunc. Curabitur volutpat facilisis mi quis tempor. Donec eget ligula sagittis, pulvinar eros eu, efficitur mauris. Nulla mollis fringilla risus, id dictum mi condimentum vitae.',
      offerPageHeader: 'For intermediate users',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'VSC shortcuts', component: <Ch1e1 /> },
               { name: 'Install extensions', component: <Ch1e1 /> },
               { name: 'Install Node JS', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'HTML - Basic',
            lessons: [
               { name: 'Basic template', component: <Ch1e1 /> },
               { name: 'Box model', component: <Ch1e1 /> },
               { name: 'Basic tags', component: <Ch1e1 /> },
               { name: 'Semantic tags', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'CSS - Basic',
            lessons: [
               { name: 'Style text', component: <Ch1e1 /> },
               { name: 'Style images', component: <Ch1e1 /> },
               { name: 'Position', component: <Ch1e1 /> },
               { name: 'Flex and grid', component: <Ch1e1 /> },
               { name: 'Transform', component: <Ch1e1 /> },
               { name: 'Responsive', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'JavaScript - Basic',
            lessons: [
               { name: 'Create variables', component: <Ch1e1 /> },
               { name: 'Select DOM elements', component: <Ch1e1 /> },
               { name: 'Loop, if', component: <Ch1e1 /> },
               { name: 'Objects', component: <Ch1e1 /> },
               { name: 'Import / export', component: <Ch1e1 /> },
               { name: 'Classes', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'React JS - Basic',
            lessons: [
               { name: 'Create app', component: <Ch1e1 /> },
               { name: 'Components', component: <Ch1e1 /> },
               { name: 'Styling', component: <Ch1e1 /> },
               { name: 'Install dependencies', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Interactive ideas',
            lessons: [
               { name: 'Dropdowns', component: <Ch1e1 /> },
               { name: 'Sliders', component: <Ch1e1 /> },
            ]
         }
      ]
   },

   {
      id: 3,
      type: 'Exclusive',
      price: 50,
      rate: 5,
      infoPara: 'For those, who are looking for real knowledge',
      infoDetails: {
         language: 'English',
         lastUpdated: '15.09.2022'
      },
      infoList: [
         { name: 'Access to the course', present: true },
         { name: 'Live code editor', present: true },
         { name: 'Updating new features', present: true },
         { name: 'All language aspects', present: true },
         { name: 'Hosting services', present: true },
         { name: 'Personal mentor', present: true }, 
      ],
      offerPagePara: 'Quisque varius nibh quis massa convallis egestas eget ac orci. Nam leo nibh, pulvinar ornare est at, laoreet egestas magna. Cras congue erat in ipsum consequat pellentesque. Etiam pretium mauris ut ipsum aliquam pretium. Nunc ut sem et libero fringilla rutrum in a leo.',
      offerPageHeader: 'Exclusive pack',
      courseAside: [
         {
            chapter: 'Introduction',
            lessons: [
               { name: 'Setup enviroment', component: <Ch1e1 /> },
               { name: 'VSC shortcuts', component: <Ch1e1 /> },
               { name: 'Install extensions', component: <Ch1e1 /> },
               { name: 'Install Node JS', component: <Ch1e1 /> },
               { name: 'Install Git', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'HTML - Basic',
            lessons: [
               { name: 'Basic template', component: <Ch1e1 /> },
               { name: 'Box model', component: <Ch1e1 /> },
               { name: 'Basic tags', component: <Ch1e1 /> },
               { name: 'Semantic tags', component: <Ch1e1 /> },
               { name: 'Forms', component: <Ch1e1 /> },
               { name: 'Other tags', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'CSS - Basic',
            lessons: [
               { name: 'Style text', component: <Ch1e1 /> },
               { name: 'Style images', component: <Ch1e1 /> },
               { name: 'Position', component: <Ch1e1 /> },
               { name: 'Flex and grid', component: <Ch1e1 /> },
               { name: 'Transform', component: <Ch1e1 /> },
               { name: 'Responsive', component: <Ch1e1 /> },
               { name: 'Modern design', component: <Ch1e1 /> },
               { name: 'Animations', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'JavaScript - Basic',
            lessons: [
               { name: 'Create variables', component: <Ch1e1 /> },
               { name: 'Select DOM elements', component: <Ch1e1 /> },
               { name: 'Loop, if', component: <Ch1e1 /> },
               { name: 'Objects', component: <Ch1e1 /> },
               { name: 'Import / export', component: <Ch1e1 /> },
               { name: 'Classes', component: <Ch1e1 /> },
               { name: 'Async await', component: <Ch1e1 /> },
               { name: 'Workers', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'React JS - Basic',
            lessons: [
               { name: 'Create app', component: <Ch1e1 /> },
               { name: 'Components', component: <Ch1e1 /> },
               { name: 'Styling', component: <Ch1e1 /> },
               { name: 'Install dependencies', component: <Ch1e1 /> },
               { name: 'Hooks', component: <Ch1e1 /> },
               { name: 'Connect Node server', component: <Ch1e1 /> },
               { name: 'Routing', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Interactive ideas',
            lessons: [
               { name: 'Dropdowns', component: <Ch1e1 /> },
               { name: 'Sliders', component: <Ch1e1 /> },
               { name: 'Cookies', component: <Ch1e1 /> },
            ]
         },

         {
            chapter: 'Node JS - Basic',
            lessons: [
               { name: 'Creating server', component: <Ch1e1 /> },
               { name: 'Routing', component: <Ch1e1 /> },
               { name: 'File system', component: <Ch1e1 /> },
               { name: 'REST api', component: <Ch1e1 /> },
            ]
         },
      ]
   }
]

export default Plans