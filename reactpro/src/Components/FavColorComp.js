import React, { Component } from 'react'

export class FavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            colors:[
                {id:101 ,name:"Red"},
                {id:102,name:"Blue"},
                {id:103,name:"Yellow"},
                {id:104,name:"Pink"},
                {id:105,name:"Green"},
                {id:106,name:"Orange"},
            ]
             
        }
    }
    
    render() {
        const {colors}=this.state
        return (
            <div>
                <h2>This Is Favourite Color Component</h2>
                
                    {
                        colors.map((val)=>{
                            return <li key={val.id}>{val.name}</li>
                        })
                    }
                
            </div>
        )
    }
}

export default FavColorComp;
