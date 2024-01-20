import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function UseStateHookComp() {
    const [count,setCount]=useState(0)
    const [name,setname]=useState("soham")
    const [fruits,setfruits]=useState(["Appple","Grapes","Mango","Banana","melon"])

    const incrementCount=()=>{
        setCount(count+1)
    }
     
    setTimeout(()=>{
        setname("Soham Galande")
    },2000)
    return (
        <div>
            <h2>This is State Hooks</h2>
            <p>Count value id:<strong>{count}</strong></p>
            <button type='button' onClick={incrementCount}>Counter++</button>
            <button type='button' onClick={()=>setCount(count-1)}>Counter--</button>
            <br></br>
            <p>My Name is <strong>{name}</strong></p>
            <p>List of fruits:
                    {fruits.map((val,index)=>{
                        return <li key={index}>{val}</li>
                    })}         
            </p>

        </div>
    )
}

export default UseStateHookComp
