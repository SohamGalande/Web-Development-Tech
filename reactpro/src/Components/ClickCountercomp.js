import { Component } from "react";
import HOC from "./HOC";

class ClickCountercomp extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }

    // countadd = () => {
    //     this.setState((pre) => ({ count: pre.count + 1 }))
    // }

    render() {
        // const { count } = this.state
        return (<div>
            <hr></hr>
            <p>count:<strong>{this.props.count}</strong></p>
            <button type="button" onClick={this.props.countadd}>Count++</button>

        </div>)
    }
}

export default HOC(ClickCountercomp,3);