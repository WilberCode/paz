'use client'
import useForm from "@/hook/useForm"
import Input from "../atoms/Input";
 

 
interface FormProps  {
    nombre:string;
    apellido:string;
    correo:string;
    celular:string;
}
 

const FormularioContacto = () => {
  const {formulario,handleChange} =  useForm<FormProps>({
    nombre:'',
    apellido:'',
    correo:'',
    celular:''
  })
   

  return (
     <form action="">
            <h2  className="text-2xl font-semibold mb-5 text-primary-main " >Contáctanos</h2>
            <div className="flex flex-col space-y-5  " >
                <div  className="flex   space-x-7" >
                    <Input  handleChange={handleChange} name="nombre" value={formulario.nombre} placeholder="Nombre" type="text" />  
                    <Input  handleChange={handleChange} name="apellido" value={formulario.apellido} placeholder="Apellido" type="text" />  
                </div>
                <Input  handleChange={handleChange} name="correo" value={formulario.correo} placeholder="Correo" type="email" />  
                <Input  handleChange={handleChange} name="celular" value={formulario.celular} placeholder="Celular" type="email" /> 
                <div>
                <button  className="btn">Enviar consulta</button> 
                </div>
            </div>
             
   
        {/* {JSON.stringify(formulario)} */}
     </form>
  )
}

export default FormularioContacto