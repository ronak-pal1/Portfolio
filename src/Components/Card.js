import { useEffect } from "react";
import "../styles/Card.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    return (
        <div className="card" data-aos="zoom-in">
            <img src={props.imageSrc} alt="Ronak Paul" />
            <div className="description">
                <p>
                    {props.desp}
                </p>
            </div>
        </div>
    );
}

export default Card;