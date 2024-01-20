import React, { Component } from 'react'

export class LifecycleComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "red",
        }
    }

    // static getDerviedStateFromProps(props) {
    //     return {
    //         color: props.mycolor
    //     }

    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"blue"})
    //     },2000)
    // }


    shouldComponentUpdate() {
        return true;
    }

    changecolor = () => {
        this.setState({ color: "grey" });
    }

    getSnapshotBeforeUpdate(preprops,prevState){
        document.getElementById("beforeUpadate").innerHTML=`Color before update: ${prevState.color}`;
    }
    componentDidUpdate(){
        document.getElementById("afterUpadate").innerHTML=`Color after update: ${this.state.color} `;
    }


    render() {
        return (
            <div>
                <hr></hr>
                <h2>This is Component Lifecycle Component</h2>

                <strong>You have Selected: {this.state.color} color</strong>

                <div id='beforeUpadate'></div>
                <div id='afterUpadate'></div>
                <button type="button" onClick={this.changecolor} className='btn btn-info mt-2' >Change Color</button>
            </div>
        )
    }
}

export default LifecycleComp
