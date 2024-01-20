import React from 'react'

function Usercomp(props) {
//     return (
//         <div>
//             <hr></hr>
//             <strong><em>{uname} login successful</em></strong>
            
//         </div>
//     )
// }
if(props.uname==="aadesh"){
    throw new Error (`${props.uname} not a user`)
}
return <h2>{props.uname} login successful</h2> ;
}


export default Usercomp;
