 
'use client'; 

import  React  from 'react';
import {useState,useEffect} from 'react';
import Map,{Marker} from 'react-map-gl'; 
/* import { getCenter } from 'geolib'; */
import  getCenter  from 'geolib/es/getCenter';
import { MapPinIcon } from '@heroicons/react/20/solid';

 

const MapView = ({resultsLatLong,viewport }:any) => { 

  
 
  const puntostlc = resultsLatLong.map((data:DataEntry)=>({latitude:data.lat,longitude:data.long})) 
 
  return<>  
          <Map
            mapLib={import('mapbox-gl')} 
            style={{ width: '100%', height: '800px' }} 
            mapStyle='mapbox://styles/wil95/clnj6gh7t085y01qx2jwt781n'
            mapboxAccessToken={process.env.mapbox_key} 
       initialViewState={viewport} 
            viewState={viewport}   


            >
              {
                puntostlc.map((result:any)=> (
               
                    <Marker key={result.latitude} latitude={result.latitude}  longitude={result.longitude} anchor="bottom"   >
                      <MapPinIcon  className="w-8 text-yellow-400 fill-current animate-bounce " /> 
                    </Marker> 
                ) )
              }
          </Map> 
      
          </> ;
}

export default MapView

 