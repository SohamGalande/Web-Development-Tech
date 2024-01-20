import React, { Component } from "react";

class StateContructor extends Component{

    constructor () {
        super();
        this.state={
            myname:"Soham",
            salary:"20000"
      }
      setTimeout(()=>
      {

        //this.setState({salary:this.state.salary+200,myname:"galande"})

        this.setState((pre)=>({
            salary:pre.salary+200,
            myname:"Soham Galande"
        }))
      },2000)
    }

    render(){
        return (
            <div>
            <hr></hr>
            <p>
                name:{this.state.myname}
            </p>

            <p>
                salary:{this.state.salary}
            </p>

            </div>
        )
    }
}

export default StateContructor;