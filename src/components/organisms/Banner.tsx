import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <section  className="h-[600px] relative banner flex justify-center items-center " >
        <Image src="/banner.jpg" alt="Banner"   layout="fill"
   className=" object-cover absolute top-0 left-0 right-0 bottom-0 w-full h-full  "  /> 
         <div className=" container relative z-10  text-white text-center " >
             <h1  className="text-4xl" >Ataúdes de Calidad a Precios Justos</h1>
             <p  className="w-full block max-w-[700px] mx-auto mt-12" >Ofrecemos ataúdes de calidad a precios justos. En estos momentos delicados, nos comprometemos a proporcionar opciones que reflejen el respeto y la dignidad que merecen tus seres queridos, sin que tengas que preocuparte por un gasto excesivo. Nuestra prioridad es brindarte soluciones adecuadas que te den tranquilidad.</p>
            <div  className="inline-flex items-center space-x-5 mt-8" >
              <Link className="btn " href="#">Comprar ahora</Link>
              <Link className="btn" href="#">Contactar</Link>
            </div>
         </div>
    </section>
  )
}

export default Banner