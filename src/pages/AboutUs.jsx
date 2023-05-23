import { useParams } from "react-router-dom";
import "./Pages.css";
const AboutUs = (props) => {
    console.log('useParams', props, useParams)
    return (<>
        <h1>About Us</h1>
    </>);
}

export default AboutUs;