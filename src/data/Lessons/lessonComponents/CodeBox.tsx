import React from 'react'

const CodeBox = ({text}: {text: string}) => {
   const sectionStyle: React.CSSProperties = {
      border: '2px solid cornflowerblue',
      padding: '1.25em',
      marginBottom: '1.5em',
      borderLeft: '10px solid royalblue',
      fontWeight: '600',
      background: 'whitesmoke',
      position: 'relative',
   }

   const headerStyle: React.CSSProperties = {
      fontWeight: '700',
      fontSize: '.85rem',
      textTransform: 'uppercase',
      marginTop: '2em'
   }

   return (
      <section className="code-box">

         <h6 style={headerStyle}>CODE:</h6>

         <section style={sectionStyle}>

            <pre>
               {text}
            </pre>

         </section>

      </section>
   )
}

export default CodeBox