'use client' 
import MenuLink from "../atoms/MenuLink" 
import useHash from "@/hook/useHash";
import menu from "@/lib/menu";

 



const MenuDesktop = () => {    

  return (
    <ul  className="flex items-center space-x-14">
      {menu.map(menu =>  <MenuLink key={menu.link} link={menu.link} label={menu.label} active={useHash(menu.link)}  desktop /> )}
    </ul> 
  )
}

export default MenuDesktop