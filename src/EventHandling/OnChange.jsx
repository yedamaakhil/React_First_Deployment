import { useState } from "react"

export function OnChange(){
    const [name,setState] = useState("");
    const change = (val)=>{
        setState(val.target.value)
    }
    return(
        <>
        <label htmlFor="">Name : </label>
        <input type="text" placeholder="Enter the name" onChange={change} />
        <h1>Name : {name}</h1>
        </>
    )
}