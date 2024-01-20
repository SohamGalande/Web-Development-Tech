const HoverComp=()=>{
    
    const greet=()=>{
        window.alert("Welcome To React Session")
    }

    const WelcomeStudent=(Stdname)=>{
        window.alert(`Welcome To React session ${Stdname}`)
    }


        const  eventtry=()=>{
            window.alert("good")
        }
    
    return (<div>
        <hr></hr>
        <h2>This is Hover component</h2>
        <h2 onMouseOver={greet}>Hover On Me</h2>
        <button type="button" onClick={WelcomeStudent("SOHAM")}>Click here</button>
        {/* <h2 on={eventtry}>lflfe</h2> */}
    </div>)
}

export default HoverComp;