'use client'
import useForm from "@/hook/useForm"
import Input from "../atoms/Input";
import { FormEvent } from "react";
import sendEmail from "../../../utils/send-email"; 


 

const FormularioContacto = () => {
  const {formulario,handleChange} =  useForm<FormPropsContact>({
    nombre:'',
    apellido:'',
    correo:'',
    celular:'',
    mensaje:''
  })
   
  const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    sendEmail(formulario)
  }
/*   | ChangeEvent<HTMLTextAreaElement> */
  return (
     <form  onSubmit={onSubmit} >
            <h2  className="text-2xl font-semibold mb-5 text-primary-main " >Contáctanos</h2>
            <div className="flex flex-col space-y-5  " >
                <div  className="flex   space-x-7" >
                    <Input  handleChange={handleChange} name="nombre" value={formulario.nombre} placeholder="Nombre" type="text" />  
                    <Input  handleChange={handleChange} name="apellido" value={formulario.apellido} placeholder="Apellido" type="text" />  
                </div>
                <Input  handleChange={handleChange} name="correo" value={formulario.correo} placeholder="Correo" type="email" />  
                <Input  handleChange={handleChange} name="celular" value={formulario.celular} placeholder="Celular" type="text" />  
                <textarea   id={'mensaje'} name={'mensaje'} value={formulario.mensaje} onChange={()=>handleChange}   rows={5} className='py-2 w-full px-4 rounded-lg border-2 border-primary-main  block focus-within:outline-primary-dark' placeholder={'¿En qué podemos ayudarte?'}></textarea>

                <div>
                <button  className="btn">Enviar consulta</button> 
                </div>
            </div>
             
   
        {/* {JSON.stringify(formulario)} */}
     </form>
  )
}

export default FormularioContacto