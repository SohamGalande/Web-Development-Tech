import React, { Component } from 'react'

class
    RenderPropsComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0

        }
    }

    countadd=()=>{
        this.setState((pre)=>({count:pre.count +1 }))
    }



    render() {
        return (
            <React.Fragment>
                <em>HELLO RENDER </em>
                {/* <p>name:{this.props.name(false)}</p> */}
                <p>{this.props.render(this.count,this.countadd)}</p>
            </React.Fragment>
        )
    }
}

export default RenderPropsComp
