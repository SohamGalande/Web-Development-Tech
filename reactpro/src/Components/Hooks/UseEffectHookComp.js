import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function UseEffectHookComp() {
    const[count,setCount]=useState(0)
    const[salary,setSalary]=useState(10000)
    const[name,setName]=useState("soham")
    //with dependacy
    // useEffect(()=>{
    //     setCount(count+1)
    // })
    
    //2.Using dependancy with array
    useEffect(()=>{
        setCount(count+1)
        
    },[salary,name])

    const incerementSalary=()=>{
        setSalary(salary+1000)
    }
    const decerementSalary=()=>{
        setSalary(salary-1000)
    }

    const changeName=(()=>{
        setName("Soham Galande")
    })

    return (
        <div>
            
            <h2>This Is Effect Hook</h2>
            <p>Counter value is: <strong>{count}</strong></p>
            <p>Salary is: <strong>{salary}</strong></p>
            <button type='button' onClick={incerementSalary}>Incerement Salary</button>
            <button type='button' onClick={decerementSalary}>decerement Salary</button>
            <p>Name is: <strong>{name}</strong></p>
            <button type='button' onClick={changeName}>Change Name</button>
        </div>
    )
}

export default UseEffectHookComp
