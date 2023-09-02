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
                        <a href="https://discordapp.com/users/487664802383265792" rel="noreferrer" target="_blank"><img src={discordIcon} /></a>
                        <a href="https://newworkspace-eym5478.slack.com/team/U04R09N1FHV" rel="noreferrer" target="_blank"><img src={slackIcon} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBox;