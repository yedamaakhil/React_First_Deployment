import { useEffect, useState } from "react"

export default function UpdatingPhaseFunctional(){

    const[count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Count value : ",count);
           
    },[count])

    return(
        <>
        <h1>Updating Phase Functional</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>↑↑↑↑</button>
        </>
    )
}