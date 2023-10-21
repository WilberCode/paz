
'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import MenuMobile from './MenuMobile'
import Link from 'next/link'

const NavMobile = () => {
  const [navMobile, setNavMobile] =  useState<boolean>(false) 
  return (<>
        {
          navMobile && (
                <nav  className=" p-5 absolute h-screen top-0 left-0 right-0 bottom-0 z-20 bg-primary-dark   text-white " >
                        <button 
                        className="self-end bg-white rounded-full w-9 h-9  flex items-center justify-center ml-auto "
                        onClick={()=>setNavMobile(!navMobile)}
                        >
                            <XMarkIcon className="w-5 h-5 text-black fill-current " />  
                        </button>
                        <div  className="grid place-content-center mt-4 " >

                        <MenuMobile/>  
                        <ul  className="text-center space-y-4  pt-6 " >
                            <li>  <Link href='tel:+5199587015'>+5199587015</Link>  </li>
                            <li>  <Link href='tel:+5199587015'>puntotl@info.pe</Link>  </li>
                            <li>  <Link href='tel:+5199587015'>Av.Paraguay y 4to anillo, <br /> Mark Parque</Link>  </li>
                        </ul>
                        <ul  className="  flex space-x-4 justify-center mt-8 " >
                            <li>  <Link href='#'  > <svg  className="w-8 h-8 text-white  fill-current " ><use href="/icons.svg#linkedin"/></svg>  </Link>  </li> 
                            <li>  <Link href='#'  > <svg  className="w-8 h-8 text-white  fill-current " ><use href="/icons.svg#facebook"/></svg>  </Link>  </li> 
                            <li>  <Link href='#'  > <svg  className="w-8 h-8 text-white  fill-current " ><use href="/icons.svg#instagram"/></svg>  </Link>  </li> 
                        
                        </ul>
                        
                        </div>
                    </nav>
            )
        }
        <button className="inline md:hidden" onClick={()=> setNavMobile(!navMobile) } >
            <Bars3Icon  className="w-8 h-8 text-primary-light fill-current " /> 
        </button>
</>
  )
}

export default NavMobile