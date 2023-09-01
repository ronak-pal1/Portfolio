import "../styles/ContactBox.css";
import closeSignIcon from "../assests/cross.png";
import discordIcon from "../assests/discord.png";
import slackIcon from "../assests/slack.png";

const ContactBox = (props) => {
    return (
        <div className="contactBoxContainer">
            <div className="contactBox">
                <div className="closeSignContainer">
                    <img src={closeSignIcon} alt="close icon" onClick={props.hideContact}/>
                </div>

                <div className="contactDetails">
                    <p className="email">Email: ronakpaul882@gmail.com</p>
                    <a href="mailto:ronakpaul882@gmail.com?body=Write your message here" target="_blank" rel="noreferrer" className="emailButton">Send Mail</a>

                    <div className="socialIcons">
                        <a href="#" rel="noreferrer"><img src={discordIcon} /></a>
                        <a href="#" rel="noreferrer"><img src={slackIcon} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBox;