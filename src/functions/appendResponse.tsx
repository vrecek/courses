import AppendResult from "./AppendText"

const appendResponse = (ar: AppendResult, msg: string, elem: HTMLElement, cname?: string): void => {
   ar.setMessage = msg
   if(cname) ar.setClass = cname
   ar.appendTo(elem, 3)
}

export default appendResponse