import React from 'react'
import { Link } from 'react-router-dom'

function NavComp() {
    return (
        <div>
            {/* <h2>This is Nav Component</h2> */}
            <div style={{float:"left"}}>
            
            
            <Link to="/" className='btn btn-outline-danger btn-lg me-1' >Home</Link>
            <Link to="/Carousel" className='btn btn-outline-danger btn-md me-1' >Carousel</Link>
            <Link to="/form" className='btn btn-outline-danger btn-md me-1'  > Form</Link>
            {/* <Link to="/fav" className='btn btn-outline-danger btn-sm' >favcolor</Link> */}
            {/* <Link to="/ImageCarousel" className='btn btn-outline-danger btn-sm' >ImageCarousel</Link> */}
            <Link to="/ReactHooks" className='btn btn-outline-danger btn-md me-1' >Hooks</Link>
            <Link to="/Dashboard" className='btn btn-outline-danger btn-md ' >CRUD</Link>
              </div>
        
        </div>
    )
}

export default NavComp
