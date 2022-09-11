const togglePassword = (input: HTMLInputElement, span: HTMLElement): void => {
   const type: string = input.type
   input.type = type === 'text' ? 'password' : 'text'

   for(let x of Array.from(span.children)) {
      if(x.tagName === 'SPAN') x.remove()
   }

   if(input.type === 'password') return
   
   const line = document.createElement('span')

   Object.assign(line.style, {
      width: '125%',
      height: '2px',
      background: '#303030',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)'
   })

   span.appendChild(line)
}

export default togglePassword