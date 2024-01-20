import { Component } from "react";

class MyState extends Component{


    constructor (){
        super();
        this.state = {
            myname:"soham ",
            salary1:"0"
        }
    }

    render(){
        const {name,salary}=this.props;
        const {myname,salary1}=this.state
        return (<div>
            
            <p>Name:{name}</p>
            <p>Salary:{salary}</p>
            
            <p>{myname}</p>
            <p>{salary1}</p>


        </div>

        )
        
    }
}

export default MyState;
