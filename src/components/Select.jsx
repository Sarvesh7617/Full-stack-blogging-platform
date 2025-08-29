import React,{useId,forwardRef} from "react";


const Select=({options,label,className="",...props},ref)=>{
    const id=useId();
    return(
        <div>
            {label && 
                <label htmlFor={id}>
                    {label}
                </label>
            }
                <select
                    {...props}
                    id={id}
                    ref={ref}
                    className={`bg-white border border-2 w-full text-black py-2 px-2 rounded-lg ${className}`}
                >
                    {options?.map((option)=>(
                        <option key={option} value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
        </div>
    )
}



export default forwardRef(Select);