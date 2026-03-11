import { useEffect } from "react"

export default function UnMountingPhaseFunctional(){

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("↑↑↑");
        },1000)

        return()=>{
            console.log("↓ Unmounting");
            
            clearInterval(timer)
        }
    },[])

  
    return(
        <>
        <h1>Unmounting phase functional</h1>
        </>
    )
}