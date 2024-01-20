import React from "react";

const ReactMemoComp=(props)=>{
    
    console.log("this is react memo")
    return (
        <div>
            
            <h2>This is React Memo Component</h2>
            <h2>Name:{props.name}</h2>
            {/* <h2>count:{props.count}</h2> */}
        </div>
    )
}

export default React.memo(ReactMemoComp);