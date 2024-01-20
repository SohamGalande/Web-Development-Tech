import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class ClassComp extends Component{

    render(){
        return (<div> 
            <hr></hr>
            <p> Address:<strong>{this.props.location}</strong>
            </p>
            <p>
                salary:<strong>{this.props.salary}</strong>
            </p>
            <Outlet />

        </div>)
    }

}

export default ClassComp;


<h2>This is class Componet</h2>