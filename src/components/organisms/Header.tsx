 
import Link from "next/link"
import Menu from "../modules/MenuDesktop" 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuDesktop from "../modules/MenuDesktop"; 
import NavMobile from "../modules/NavMobile"; 
 const Header = () => { 
 

  return (
    <header  className="border-none md:border-b md:border-solid border-primary-light border-opacity-30 absolute top-0 left-0 right-0 z-20 " >
       <div className="container">
        <div  className="flex justify-between nav-container ">
            <div className="py-4" >
                <Link href="/" >
                  <h3 className="text-primary-main text-3xl font-bold ">punto<span  className="text-primary-light" >tlc</span></h3>
                </Link>
            </div> 
            <nav  className=" items-center md:items-end hidden md:flex">
              <MenuDesktop/>  
            </nav>
              <NavMobile/>  
            </div>
       </div>
    </header>
  )
}

export default Header