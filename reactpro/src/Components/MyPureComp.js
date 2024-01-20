import { Component, PureComponent } from "react";

class MyPureComp extends PureComponent{
    
    
    render(){
        console.log("this is my pure compmonent")
        const {name,count}=this.props

        return (<div>
            this is my pure compmonent
            <h2>name:{name}</h2>
            {/* <h2>count:{count}</h2> */}
        </div>)


    }

}

export default MyPureComp;