import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addproduct() {
    const nav = useNavigate();
    const [item, setItem] = useState({
        name: "",
        brand: "",
        model: "",
        price: ""
    });

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });

    }

    const addproduct = (event) => {
        event.preventDefault();
        console.log(item)
        axios.post("http://localhost:8888/products",item).then(()=>{
            window.alert("Product Added Successfully")
            nav("/Dashboard")}
            ).catch((err) => { })

    }


    return (
        <div >
            <div className='contaniner'>
                <form className="row g-3" onSubmit={addproduct}>
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

export default Addproduct

