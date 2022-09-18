import React from 'react'
import FinishSection from '../../../../components/COURSE_PAGE/Content/FinishSection'
import CodeBox from '../../lessonComponents/CodeBox'
import CodeHeader from '../../lessonComponents/CodeHeader'
import CodeImage from '../../lessonComponents/CodeImage'
import CodeText from '../../lessonComponents/CodeText'
import CodeWarn from '../../lessonComponents/CodeWarn'
import img from '../../../../images/ch1e1.png'

const Ch1e1 = () => {
const c1: string = `const obj = {
   test: one,
   two: 3
}
obj.two
`

const c2: string = `export default class DropDown {
   private active: boolean
   private activeList: HTMLElement | null

   private filterExpand(x: string): boolean {
      if(/[0-9.]/ig.test(x)) return true

      return false
   }

   private returnHeight(list: HTMLElement, display?: DisplayType): number {
      list.style.height = 'auto'
      list.style.display = display ?? 'block'
      
      return parseFloat(
                           window.getComputedStyle(list, null).getPropertyValue('height')
                           .split('')
                           .filter(x => this.filterExpand(x) )
                           .join('')
                        )
   }

   public constructor() {
      this.active = false
      this.activeList = null
   }
}
`

   return (
      <main className="lesson">

         <CodeText>Lorem ipsum dolor sit amet</CodeText>

         <CodeBox text={c1} />

         <CodeHeader>Install Visual Studio Code</CodeHeader>
         <CodeText asSpan={true}>Quisque ornare arcu et interdum malesuada </CodeText>
         <CodeText asSpan={true} color='red'>dapibus odio </CodeText>
         <CodeText asSpan={true}>ac tincidunt consequat</CodeText>

         <CodeWarn>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore impedit laborum architecto delectus cupiditate porro, temporibus, ab numquam commodi quasi neque dignissimos culpa nihil ea sunt nobis repellat? Sit.</CodeWarn>

         <CodeImage>{img}</CodeImage>

         <CodeBox text={c2} />
         <CodeText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at id obcaecati fugiat veniam, est, modi repudiandae possimus eius quis tempora eos debitis, dicta consequatur culpa ratione quasi itaque dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores mollitia architecto nisi quas natus totam praesentium ut nulla repellat cupiditate nostrum, fugiat culpa. Blanditiis nulla officia eos voluptatem magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quisquam, assumenda error magni praesentium doloribus voluptate quis aspernatur, laborum blanditiis temporibus distinctio. Culpa nam tenetur temporibus pariatur fugit natus ipsam.</CodeText>

         <FinishSection />

      </main>
   )
}

export default Ch1e1