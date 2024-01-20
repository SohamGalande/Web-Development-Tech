import React,{ Component } from "react";

const HOC=(Reyy,val)=>{
    
    class HOCComp extends Component{

        constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    countadd = () => {
        this.setState((pre) => ({ count: pre.count + val }))
    }

    render(){
        // return <warper count={this.state.count} countadd={this.countadd} ></warper>
        return <Reyy count={this.state.count} countadd={this.countadd}></Reyy>
    }

    }

    return HOCComp;
}


export default HOC;