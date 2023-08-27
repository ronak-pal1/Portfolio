import twitterLogo from "../assests/icons8-twitter-240.png";
import linkedinLogo from "../assests/icons8-linkedin-240.png";
import instagramLogo from "../assests/icons8-instagram-240.png";
import youtubeLogo from "../assests/icons8-youtube-240.png";
import githubLogo from "../assests/icons8-github-240.png";
import closeIcon from "../assests/cross.png";
import cpuIcon from "../assests/cpu-icon.png";
import "../styles/SideBar.css";


const openSideBar = () =>{
    document.getElementById("slideBarContainerId").style.width="360px";
}

const closeSideBar = () => {
    document.getElementById("slideBarContainerId").style.width="0px";
}

const SideBar = () => {
    return (
        <>
            <div className="slideBarContainer" id="slideBarContainerId">
                <div className="closeSignContainer">
                    <img className="closeSign" src={closeIcon} onClick={closeSideBar}/>
                </div>

                <div className="slideBar">
                    <div className="slideBarSocials">
                        <h1>Socials</h1>
                        <div>
                            <img src={twitterLogo} />
                            <img src={linkedinLogo} />
                            <img src={githubLogo} />
                            <img src={instagramLogo} />
                            <img src={youtubeLogo} />
                        </div>
                    </div>

                    <div className="slideBarProjects">
                        <h1>Projects</h1>
                        <div>
                            <p><img src={cpuIcon} /><a href="">codecasing</a></p>
                            <p><img src={cpuIcon} /><a href="">upschedule.com</a></p>
                        </div>
                    </div>
                    <div className="slideBarContect">
                        <a href="#" className="contactButtonLink"><div>Contact</div></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export {SideBar, openSideBar};
