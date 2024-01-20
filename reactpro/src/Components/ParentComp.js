import Childcomp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import ReactMemoComp from "./ReactMemoComp";
import './external.css'


const { Component } = require("react");


class ParentComp extends Component{

    constructor(){
        super();
        this.state={
            count:0,
            name:"soham galande"
            
        }
    }

    changeData= ()=>{
        this.setState((prestate)=>({count:prestate.count+1}))
    }
    
    // const=()=>{
    //      return <h2>parent</h2>
    // }
    render(){
        console.log("this is parent component")
        const {count,name}=this.state;
        return (<div>
            <hr></hr>
            <h2>parent Component</h2>
            <h3>name:{name}</h3>
            <h3>count:{count}</h3>
            <button className="btn btn-primary" type="button" onClick={this.changeData}>count++</button>
            {/* <hr></hr> */}
            {/* <Childcomp count={count} changeData={this.changeData} /> */}
            <hr></hr>
            <MyPureComp name={name}  />
            <hr></hr>
            <ReactMemoComp name={name} />
        </div>)
    }
   
}

export default ParentComp;