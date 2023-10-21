'use client';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import Map from "../modules/MapView"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import  getCenter  from 'geolib/es/getCenter';
import MapView from "../modules/MapView";
import TextMatchMap from "../atoms/TextMatchMap";
 
const FiltroTLC = () => {
    const [results_entry, setResults] = useState<DataEntry[]>([]); 
    const [results_filtered, setResultsFiltered] = useState<DataEntry[]>([]);
    const [input, setInput] = useState<string>('')
    const initial_wiew_state =  {
      latitude: -11.126759233214033,
      longitude: -75.90540976465334,
      zoom:6
    }
    const [viewport, setViewport] = useState(initial_wiew_state);
    useEffect(() => { 
      const resultLocation =  async()=>{ 
        await fetch("https://api.npoint.io/269a0d224b390a25f09c") 
        .then(res=>res.json())
        .then(data=>{   
            setResults(data) 
            setResultsFiltered(data)  
        })
        
      }
      resultLocation()  
    }, [0])  

  const showPoints = (departamento:string)=>{ 
      if (departamento==='Todos'){
        setResultsFiltered(results_entry) 
        setViewport(initial_wiew_state)
      } else{
        const departamento_ubicado:DataEntry[] =  results_entry.filter((data:DataEntry)=>data.nombre.toLowerCase()===departamento.toLowerCase())  
        setResultsFiltered(departamento_ubicado)
        depaAUbicar(departamento_ubicado) 
        
      } 
  } 
  
  
  const depaAUbicar =  (result:DataEntry[])=>{
    const center  = result.map((data:DataEntry)=>({latitude:data.lat,longitude:data.long,zoom:8}))[0] 
    let ubicacion = {
      latitude:center.latitude,
      longitude:center.longitude,
      zoom:7
    }
    setViewport(ubicacion)  
    
  }

  const SearchFilterMatch = ()=>{
    const results_matches:DataEntry[] =  results_entry.filter((result:DataEntry) => result.nombre.toLowerCase().match(input.toLowerCase()))  
    return results_matches;
  }

  const  inputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
     setInput(e.target.value)
  }

  const textNoMatch =  (results_matches:DataEntry[])=>{ 
    const exist_nombre = results_matches.some((res)=> res.nombre.toLocaleLowerCase() == input.toLocaleLowerCase())
    return !exist_nombre
  }
 

  const handleSearchDepart = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault() 
    if(textNoMatch(SearchFilterMatch())) return;
    showPoints(input)
  }

  return (
    <section className="pt-[100px] bg-primary-light bg-opacity-20  ">
        <div className="container mb-6">
            <div  className="md:flex max-md:space-y-6 md:space-x-6 p-6 border border-gray-500 rounded-lg  bg-white" >
                <div  className="flex-1" >
                    <h4  className="font-medium" >Filtros</h4>
                    <div  className="flex items-center border border-gray-500 py-1 px-2 rounded-md" >
                        <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500 fill-current " /> 
                        {/* <input placeholder="Todos los puntos" type="text"  className="flex-grow outline-none px-3 py-1 " /> */}
                        <select   onChange={(e)=>showPoints(e.target.value)} className="flex-grow outline-none px-3 py-1" >
                          <option value="Todos"  >Todos los puntos</option> 
                          { results_entry.map((result:DataEntry) =>( <option key={result.lat} value={result.nombre}>{result?.nombre}</option>   ))} 
                        </select>
                       {/*  <button onClick={()=>showPoints('Arequipa')} >Filtrar</button> */}
              {/*           <ChevronDownIcon className="w-6 h-6 text-gray-500 fill-current" />   */}
                    </div>
                    <p  className="text-[14px] mt-2" >Explora nuestra amplia red de puntos de atención TLC.</p>
                   
                </div>
                <div className="flex-1" >
                    <h4  className="font-medium" >Buscar</h4>
                    <form  onSubmit={handleSearchDepart} className={`flex items-center border border-gray-500 py-1 px-2 rounded-md  ${(!!input.trim() && SearchFilterMatch().length>0) && textNoMatch(SearchFilterMatch()) && 'rounded-b-none'}`}  >
                      <button type="submit" ><MagnifyingGlassIcon className="w-5 h-5 text-gray-500 fill-current " /> </button>
                        <input value={input} onChange={inputHandler} placeholder="Ingrese el nombre" type="text"  className="flex-grow outline-none px-3 py-1 " />
                        <ChevronDownIcon className="w-6 h-6 text-gray-500 fill-current" />  
                    </form>
                    {!!input.trim() &&  textNoMatch(SearchFilterMatch()) && ( 
                     <ul> 
                        {SearchFilterMatch().map((result:DataEntry) =>( <TextMatchMap  nombre={result.nombre} key={result.lat} setInput={setInput} showPoints={showPoints} />  ))}
                      </ul>
                      
                    )}
                    <p  className="text-[14px] mt-2" >Si conoces ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa aliquid officia rem veniam, accusantium iusto ducimus qui non quam ullam corporis. Quae mollitia minus.</p>
                </div>
            </div>  
        </div>
         <MapView resultsLatLong={results_filtered} viewport={viewport} setViewport={setViewport} />  
    </section >
  )
}

export default FiltroTLC
