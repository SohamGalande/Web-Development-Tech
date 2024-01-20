import react, { Component } from "react";

class MyClassComp extends Component {

    render() {
        const {myname,post}=this.props;
        return (
        <div>
            <hr></hr>
            <h3>This is my second class component</h3>
                <p>My Name is:<strong>{myname}</strong></p>
                <i>post:<strong>{post}</strong></i>
                <hr></hr>
        </div>)
    }
}

export default MyClassComp;