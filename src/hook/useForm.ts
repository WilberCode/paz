import { ChangeEvent, useState } from "react"

 
const useForm = <T extends Object >(initialState:T) => {
   
  const [formulario, setFormulario] = useState(initialState)

  const handleChange = ({target}:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target
    setFormulario({...formulario, [name]:value})
  }

  return {
    formulario, handleChange
  }
}

export default useForm