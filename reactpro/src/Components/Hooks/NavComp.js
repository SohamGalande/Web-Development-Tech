import React from 'react'
import { Link } from 'react-router-dom'

function NavComp() {
    return (
        <div>
             <Link to="StateHooks" className='btn btn-outline-danger btn-md'>State Hooks</Link>
             <Link to="EffectHooks" className='btn btn-outline-danger btn-md'>Effect Hooks</Link>
        </div>
    )
}

export default NavComp
