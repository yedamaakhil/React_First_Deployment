import { useState } from "react"
import "./ToggleLogin.css"

export default function ToggleLogin(){
    const [yes,changes] = useState(false)
    return(
        <>
        <div className="div1">
            <h1 className="heading1">{yes ? "Login Up Form : " : "Sign Up Form : "}</h1>
            <label className="label1" htmlFor="">{yes ? "Email : " : "Email : "}</label>
            <input className="input1" type="text" placeholder="Enter your email" /><br /><br />
            <label className="label2" htmlFor="">{yes ? "Password : " : "New Password : "}</label>
            <input className="input2" type="password" placeholder="Enter your password : " /><br /><br />
            <label className="label3" htmlFor="">{yes ? "" : "Confirm Password : "}</label>
            {yes ? "" : <input className="input3" type="password" placeholder="Confirm your password" />}<br/>
            <button className="button1" onClick={()=>changes(!yes)} >{yes ? "Login" : "Sign in"}</button>
        </div>
        </>
    )
}