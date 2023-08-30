import React, {useEffect} from 'react';
import "../styles/SkillItem.css";
import AOS from 'aos'; // This is for the animation in the page
import 'aos/dist/aos.css';

const SkillItem = (props) => {

    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    
    return (
        <>
            <div className="col" data-aos="fade-right"><div><img src= { props.url } alt="banner"/></div><h2>{ props.skillName }</h2></div>
        </>
    );
}

export default SkillItem;