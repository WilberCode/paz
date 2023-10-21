import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

 

const useHash = (hash:string) => {

    const hashIndex =useParams()
    const [currenthash, setHash] = useState('')
    useEffect(() => {
        setHash(`/${window.location.hash}`)
    }, [hashIndex]);
    

  return   currenthash === hash 
}
export default useHash