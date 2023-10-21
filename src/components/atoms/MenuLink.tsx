import Link from "next/link"



type Props =  {
    link: string;
    label: string;
    active: boolean;
    desktop?: boolean;
}
 
const MenuLink = ({link, label, active, desktop}:Props) => {
  return desktop? (
    <li><Link href={link}  className={`py-3 block text-primary-light ${active?'border-b-2 border-primary-main text-primary-light ':''} `} >{label}</Link></li>
  ): (
    <li><Link href={link}  className={`py-3 block text-3xl font-semibold text-primary-light  ${active? 'text-[#ffff00]':''} `} >{label}</Link></li>
  )
}

export default MenuLink