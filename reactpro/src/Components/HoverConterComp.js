import { Component } from "react";
import HOC from "./HOC";

class HoverConterComp extends Component {

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
            <p onMouseOver={this.props.countadd}>Hover on me</p>

        </div>)
    }

}

export default HOC(HoverConterComp,2);
