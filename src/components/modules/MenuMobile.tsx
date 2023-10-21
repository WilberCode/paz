
  
import MenuLink from "../atoms/MenuLink" 
import useHash from "@/hook/useHash";
import menu from "@/lib/menu";

 



const MenuMobile = () => {    

  return (
    <ul  className="flex flex-col justify-center ">
      {menu.map(menu =>  <MenuLink key={menu.link} link={menu.link} label={menu.label} active={useHash(menu.link)}  /> )}
    </ul> 
  )
}

export default MenuMobile