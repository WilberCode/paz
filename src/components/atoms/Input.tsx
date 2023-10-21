import { ChangeEvent } from "react";

type InputProps = {
    handleChange: (e: ChangeEvent<HTMLInputElement>)=>void;
    name:string;
    value:string;
    placeholder:string;
    type:string;
} 

const Input = ({handleChange,name, value, placeholder,type}:InputProps) => {
  return (
    <label htmlFor={name}  className="w-full" > 
        <input type={type} id={name} name={name} value={value}  onChange={handleChange} className='py-2 w-full px-4 rounded-lg border-2 border-primary-main  block focus-within:outline-primary-dark' placeholder={placeholder} />
    </label>
  )
}

export default Input