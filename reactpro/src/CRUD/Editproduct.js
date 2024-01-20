import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function Editproduct() {
    const nav=useNavigate();
    const {id} =useParams();
    const [item,setItem]=useState({
        id:'',
        name:'',
        brand:'',
        model:'',
        price:''
    })
    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            // console.log(res.data)
            setItem(res.data)
        }).catch((err)=>{})

    },[])

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });

    }
    const editproduct = (event) => {
        event.preventDefault();
        console.log(item)
        axios.put(`http://localhost:8888/products/${id}`,item).then(()=>{
            window.alert("Product Edited Successfully")
            nav("/Dashboard")}
            ).catch((err) => { })

    }
    return (
        <div>
             <div className='contaniner'>
                <form className="row g-3" onSubmit={editproduct}>
                    <div className="col-md-6">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" onChange={inputChangeHandler} value={item.name} />
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Brand</label>
                        <input type="text" className="form-control" name="brand" onChange={inputChangeHandler} value={item.brand} />
                    </div>
                    <div className="col-6">
                        <label  className="form-label">Model</label>
                        <input type="text" className="form-control" name="model" onChange={inputChangeHandler} value={item.model} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" name="price" onChange={inputChangeHandler} value={item.price} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Editproduct
