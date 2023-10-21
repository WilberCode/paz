 
 type Props = {
        nombre:string;
        setInput:(nombre:string)=>void;
        showPoints:(departamento:string)=>void;
    } 


const TextMatchMap = ({nombre,setInput,showPoints}:Props) => { 
  
 const  selectText = (nombre_selected:string)=>{
    console.log(nombre_selected);
    setInput(nombre_selected)
    showPoints(nombre_selected)
  }
  return (
    <li onClick={()=>selectText(nombre)} className="py-2 px-3 cursor-pointer  last:rounded-bl-md last:rounded-br-md border border-t-0 border-gray-400"  >{nombre}</li>  
  )
}

export default TextMatchMap