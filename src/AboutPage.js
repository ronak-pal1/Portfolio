import Card from "./Components/Card";
import "./styles/AboutPage.css";
import myImage from "./assests/bannerImage.png";

const AboutPage = () => {

    const aboutMe = "Hi, my name is Ronak Paul and I am 19 years old. I am a software engineer, currently pursuing B.tech in Computer Science. I have been fond of technology since my childhood, I know all people are fond of technology. But for me, I always wanted to do something in this field and the software engineering field fascinated me a lot. I always get interested in solving things and I believe in learning by doing. I always learn new things at a fast speed, you can say that this is my magical ability.";

    return(
        <div className="aboutPage">
            <Card imageSrc={myImage} desp={aboutMe} />
        </div>
    );
}

export default AboutPage;