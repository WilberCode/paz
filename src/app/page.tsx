import Banner from '@/components/organisms/Banner'
import Contactos from '@/components/organisms/Contactos'
import FiltroTLC from '@/components/organisms/FiltroTLC'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" ">
       <Banner/> 
       <div  className=" "  id="categorias">
          <div className="container">
           <div className="md:flex max-md:space-y-16 md:space-x-6 py-[100px] ">
               <div  className="flex-grow flex flex-col  justify-center ">
                     <h2 className="text-3xl font-semibold text-primary-main  " >Ofrecemos ataúdes <br /> <span  className="text-primary-dark" >para todos los presupuestos</span> </h2>
                     <p  className="mt-10 max-w-sm ">Ofrecemos ataúdes con y sin acabado para ajustarnos a todos los presupuestos del mercado. Ofrecer calidad a precio justo es nuestra misión.</p>
               </div>
               <div  className=" max-md:flex max-md:justify-center  md:pr-8 " >
                  <div  className=" relative   after:w-full after:h-full  after:max-w-[400px] after:min-h-[400px] after:bg-primary-light after:-top-2 after:absolute after:!block after:rounded-3xl after:transform after:rotate-12   ">
                    <Image src="/banner.jpg" alt=""  layout="fill"  className='max-w-[400px]  min-h-[400px] object-cover rounded-[30px]  !relative z-10 ' /> 

                  </div>
               </div>
           </div>
          </div>
       </div>
       <div id="puntos-venta" >
         <FiltroTLC/> 
       </div>
     
       <div    id="contactanos">
        <Contactos/> 
       </div>
       
    </main>
  )
}
