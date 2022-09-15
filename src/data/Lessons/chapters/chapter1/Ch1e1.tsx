import React from 'react'
import FinishSection from '../../../../components/COURSE_PAGE/Content/FinishSection'
import CodeBox from '../../lessonComponents/CodeBox'
import CodeHeader from '../../lessonComponents/CodeHeader'
import CodeImage from '../../lessonComponents/CodeImage'
import CodeText from '../../lessonComponents/CodeText'
import CodeWarn from '../../lessonComponents/CodeWarn'

const Ch1e1 = () => {
const p = `const obj = {
   test: one,
   two: 3
}
obj.two
`

   return (
      <main className="lesson">

         <CodeText asSpan={true}>lorem jipsumdolor sit amet </CodeText>
         <CodeBox text={p} />
         <CodeHeader>Install loremipsum</CodeHeader>
         <CodeText asSpan={true}>lorem jipsumdolor sit amet </CodeText>
         <CodeText asSpan={true} color='red'>lorem ipsm </CodeText>
         <CodeText asSpan={true}>lorem jipsumdolor sit amet</CodeText>
         <CodeWarn>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore impedit laborum architecto delectus cupiditate porro, temporibus, ab numquam commodi quasi neque dignissimos culpa nihil ea sunt nobis repellat? Sit.</CodeWarn>
         <CodeImage>https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg</CodeImage>
         <CodeBox text={p} />
         <CodeText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at id obcaecati fugiat veniam, est, modi repudiandae possimus eius quis tempora eos debitis, dicta consequatur culpa ratione quasi itaque dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores mollitia architecto nisi quas natus totam praesentium ut nulla repellat cupiditate nostrum, fugiat culpa. Blanditiis nulla officia eos voluptatem magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quisquam, assumenda error magni praesentium doloribus voluptate quis aspernatur, laborum blanditiis temporibus distinctio. Culpa nam tenetur temporibus pariatur fugit natus ipsam.</CodeText>

         <FinishSection />

      </main>
   )
}

export default Ch1e1