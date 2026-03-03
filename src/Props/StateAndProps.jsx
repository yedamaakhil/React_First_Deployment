import { useState } from "react"

export function StateAndProps({name, age}) {
    const [count, setCount] = useState(age);
    return (
        <>
       <div style={{textAlign:"center"}}>
            <h1>State and Props</h1>
            <p>Name: {name}</p>
            <p>Age: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
       </div>
        </>
    )
}
