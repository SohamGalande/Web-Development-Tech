import React, { Component } from 'react'

export class ErrorBoundryComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(){
       return { 
        hasError:true
       }
    }

    componentDidCatch(err){
        console.log(err)
    }

    render() {
        
        if(this.state.hasError){
            return "not a user"
        }
       return this.props.children;
    }
}

export default ErrorBoundryComp
