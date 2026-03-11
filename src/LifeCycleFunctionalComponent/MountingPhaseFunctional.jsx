import { useEffect } from "react"

export default function MountingPhaseFunctional(){

    useEffect(()=>{
        console.log("useEffect Mounting Phase");
    },[])
    return(
        <>
        <h1>Mounting Phase Functional</h1>
        </>
    )
}
