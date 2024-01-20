import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'


function ReactHooksComp() {
    return (
        <div>
            <h3>This is Hooks Component</h3>
            <div className='card border-info'>
                <div className='card-header border-info'>
                    <NavComp />
                </div>
                <div className='card-body broder-info'>
                <Outlet />
        
                </div>
                <div className='card-footer'border-info></div>
            </div>
        </div>
    )
}

export default ReactHooksComp
