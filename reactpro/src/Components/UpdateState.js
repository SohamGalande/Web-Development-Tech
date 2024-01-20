import { Component } from "react";

class UpdateState extends Component {

    constructor() {
        super();
        this.state = {
            count: 10

        }

        // const countadd=()=>{
        //     this.setState((per)=>({count:per.count+1}))
        // }  

    }

    coutadd = () => {
        this.setState((per) => ({ count: per.count + 1 }))
        // window.alert("hi")
    }
    coutdec = () => {
        this.setState((per) => ({ count: per.count - 1 }))
        // window.alert("hi")
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <hr></hr>
                <h3>count:{count}</h3>
                <br></br>
                <button type="button" onClick={ this.coutadd }>count++</button>
                <br></br>
                <button type="button" onClick={this.coutdec }>count</button>
            </div>
        )
    }
}

export default UpdateState;