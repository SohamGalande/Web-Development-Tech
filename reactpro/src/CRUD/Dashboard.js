import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Dashboard() {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [item, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get("http://localhost:8888/products").then((res) => {
            console.log(res.data)
            setProduct(res.data);

        }).catch((err) => { })
    }
    const deleteData = (id) => {
        if (window.confirm(`Are you sure you want to delete product:${id}`)) {

            axios.delete(`http://localhost:8888/products/${id}`).then((res) => {
                console.log(res.data)
                window.alert("Product delected successfully")
                fetchData();

            }).catch((err) => { })
        }
    }

    // const editData = (id) => {

    //     if (window.confirm(`Are you sure you want to updte product:${id}`)) {

    //         axios.put(`http://localhost:8888/products/${id}`).then((res) => {
    //             console.log(res.data)
    //             window.alert("Product updated successfully")
    //             fetchData();

    //         }).catch((err) => { })
    //     }
    // }

    //react-bootstrap
    const handleClose = () => setShow(false);
    const handleShow = (Item) => {
        setShow(true)
        setItems(Item)
    };

    return (
        <div>
            <Link to="/Addproduct" className='btn btn-outline-info btn-md' style={{ float: "left" }}><i className="fa fa-plus-square-o" aria-hidden="true"></i></Link>


            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Sr.no</th><th>Name</th><th>Brand</th><th>Model</th><th>Price</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.brand}</td>
                            <td>{val.model}</td>
                            <td>&#8377; {val.price}</td>
                            <td>
                                <Button variant='outline-info' ><i className="fa fa-eye" aria-hidden="true" onClick={(() => handleShow(val))}></i></Button>
                                <Link to={`/Editproduct/${val.id}`} className='btn btn-outline-info btn-md' ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>&nbsp;
                                <button type='button' className='btn btn-outline-danger mt-2' onClick={() => { deleteData(val.id) }}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table table-hover table-striped'>
                        <thead>
                            <tr>
                            <th>No.</th><th>Name</th><th>Brand</th><th>Modal</th><th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.model}</td>
                                <td>&#8377; {item.price}</td></tr></tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )
}

export default Dashboard
