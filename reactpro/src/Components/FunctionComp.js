const FunctionComp=(props)=>{
    const {myname,post}=props;
    return (<div>
        <hr></hr>
        <h2>This is Function Componet</h2>
        <p>My name is <b>{myname}</b></p>
        <i>post:<strong>{post}</strong></i>
        <br></br>
        <i>salary:{props.salary}</i>
    </div>);
}

export default FunctionComp;
