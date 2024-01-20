import { Component } from "react";

class RenderComp extends Component{

    constructor(){
        super();
        this.state={
            isLogin:false
        }
    }
        
    render(){
       const {isLogin}=this.state

       let msg="";


       if (isLogin) {
        return<h2>Admin login success</h2>
        // msg="Admin login success"
        
       } else {
        return <h2>login failed</h2>
        // msg="login failed"
       
       }

       //2.element as variable
    //    return msg;
    
        //3.ternary operator
    // return(isLogin)?<h2>Admin login success</h2>:<h2>login failed</h2>

    //4.use of short circuit
    // return (isLogin) && <h2>Admin login success</h2> 
}
}

export default RenderComp;
