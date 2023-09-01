import menuLogo from "../assests/menu.png";
import profileLogo from "../assests/navbar-logo.png";
import "../styles/Navbar.css"
import { openSideBar } from "./SideBar";

const Navbar = (props) => {
    return (
        
    <header>
        <img className="menu" src={menuLogo} alt="menu icon" onClick={ openSideBar }/>

        <div className="logoNameContainer">
            <img className="nav-logo" src={profileLogo} alt="logo" onClick={props.showHome}/>
            <p className="nav-name" onClick={props.showHome}>Ronak Paul</p>
        </div>

        <nav>
            <ul className="navLinks">
                <li onClick={props.showAbout}>About</li>
                <li><a href="https://www.youtube.com/@CodaGo" target="_blank" rel="noreferrer">Videos</a></li>
                <li><a href="https://codago.hashnode.dev/" target="_blank" rel="noreferrer">Blogs</a></li>
                {/* <li onClick={props.showCourses}>Courses</li> */}
            </ul>
        </nav>

        <button className="contactButtonNavbar" onClick={props.showContact}>Contact</button>
        
        <div className="wiresContainer"></div>
    </header>
    );
}

export default Navbar;