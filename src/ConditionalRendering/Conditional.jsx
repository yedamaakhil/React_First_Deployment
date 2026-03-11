import { useState } from "react"
import onbulb from "../ConditionalRendering/BulbOn.png"
import offbulb from "../ConditionalRendering/BulbOff.png"

export function Conditional(){
    const[light, setState] = useState(true);

    return(
        <>
        <h1>Conditional Rendering Bulb</h1>
        <img src={light? onbulb : offbulb} alt="Bulb" height="450px" width="400px"/>
        <br />
        <div style={{display:"flex",gap:"20px"}}>
            <button onClick={()=>setState(true)}>On</button>
            <button onClick={()=>setState(false)}>Off</button>
        </div>
        </>
    )
}
