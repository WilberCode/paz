'use client'
import useForm from "@/hook/useForm"
import FormularioContacto from "../modules/FormularioContactos";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

 
interface FormProps  {
    nombre:string;
    apellido:string
}
 

const Contactos = () => {
  const {formulario,handleChange} =  useForm<FormProps>({
    nombre:'',
    apellido:''
  })
   

  return (
    <div className="container">
        <div className="flex space-x-14  py-[100px] ">
            <div  className="  flex-1" >
                <h2  className="text-2xl font-semibold mb-5 text-primary-main " >Información de <span>Contactos</span> </h2>
                <div  className="space-y-4" >
                    <div  className="flex space-x-4" >
                        <div  className="border-2 border-primary-main w-14 h-14 inline-flex justify-center items-center rounded-xl " > <MapPinIcon  className="w-8 text-primary-main fill-current " />  </div>
                        <div> 
                            <h3  className="text-lg font-medium">Ubicación</h3> 
                            <p  className="text-gray-500" >Lima - Perú</p> 
                        </div>
                    </div>
                    <div  className="flex space-x-4" >
                        <div  className="border-2 border-primary-main w-14 h-14 inline-flex justify-center items-center rounded-xl " > <EnvelopeIcon  className="w-8 text-primary-main fill-current " />  </div>
                        <div> 
                            <h3  className="text-lg font-medium">Correo</h3> 
                            <a  href="mailto:contactos@ataudespe.pe" className="text-gray-500" >contactos@ataudespe.pe</a> 
                        </div>
                    </div>
                    <div  className="flex space-x-4" >
                        <div  className="border-2 border-primary-main w-14 h-14 inline-flex justify-center items-center rounded-xl " > <PhoneIcon  className="w-8 text-primary-main fill-current " />  </div>
                        <div> 
                            <h3  className="text-lg font-medium">Celular</h3> 
                            <a  href="tel:935654424" className="text-gray-500" >935654424</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div  className="w-[1px] bg-primary-light bg-opacity-50  "/> 
            <div  className=" flex-1  "> 
              <FormularioContacto/> 
            </div>
       </div> 
   </div>
  )
}

export default Contactos