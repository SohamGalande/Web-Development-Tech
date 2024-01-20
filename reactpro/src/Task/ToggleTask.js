import { Component } from "react";
import data from '../Shared/Constant/constantdata'
import './external.css'

class ToggleTask extends Component{
    constructor(){
        super();
        this.state={
            img1: data.Zoro,
            // img2:data.Aizen
        }
    }


 image=()=>{

    if(this.state.img1===this.state.img1){
    this.setState(()=>({ img1 : data.Aizen
    }))}
     if(this.state.img1===data.Aizen){
        this.setState(()=>({ img1 : data.Zoro}))
    }
}


 render(){
    return (<div>
        <hr></hr>
        <div className="div">

             <img src={this.state.img1} alt="Zoro" height="400px" />
             <button className="btn btn-primary mt-1 " type="button" onClick={this.image}>image</button> 
        </div>
        </div>
    )
 }

}


export default ToggleTask;


