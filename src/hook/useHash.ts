import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

 

const useHash = () => {

    const hashIndex =useParams()
    const [currenthash, setHash] = useState('')
    useEffect(() => {
        setHash(`/${window.location.hash}`)
    }, [hashIndex]);
    
    const currentLink = (hash:string)=>{
         return currenthash === hash 
    }

  return   {currentLink}
}
export default useHash