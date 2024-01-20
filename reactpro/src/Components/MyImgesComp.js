import Goku from '../Assets/IMAGES/GOKU.jpg'
import Aizen from '../Assets/IMAGES/Aizen.jpg'
import Madara from '../Assets/IMAGES/Madara.webp'
import Tanjiro from '../Assets/IMAGES/Tanjiro.jpg'
// import Zoro from '../Assets/IMAGES/zoro.jpg'
import data from '../Shared/Constant/constantdata'

const MyImgesComp = () => {
    return (
        <di>
            <hr></hr>
            <h2>Gallery Component</h2>

            <img src={Goku} alt="Goku" height="600px" />
            <img src={Aizen} alt="Aizen" height="600px" />
            <img src={Madara} alt="Madara" height="600px" />
            <img src={Tanjiro} alt="Tanjiro" height="600px" />
            <hr></hr>
            <img src={data.Zoro} alt="Zoro" height="600px" />

            {/* //Access data with constan file */}
            {/* <video controls src={data.video}  alt="video" height="600px" width="600px" ></video> */}


        </di>
    )
}

export default MyImgesComp;