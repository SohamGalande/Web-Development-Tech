import './external.css'
import css from './CSSprop.module.css'

const MyCssComp = () => {

    const txtDanger ={
        color:"red",
        backgroundColor:"aqua",
        fontsize:"25px"
    }

    const mycsspro = {
        color:true ? "green" : "pink",
        backgroundColor:false ? "aqua" : "lightgray",
        fontSize:false ? "30px":"80px",
        textTransform :false ? "lowercase" :"uppercase"
    }

    return (
        <div>
            <h2 style={{"color":"blue"}}>This Is CSS Component</h2>
            <h2 style={txtDanger}>Welcome</h2>
            <h2 style={mycsspro}>trying internal css</h2>
            <h2 className='cirlce'>hi</h2>
            <h2 className={css.special}>soham</h2>

        </div>
    )

}

export default MyCssComp;
