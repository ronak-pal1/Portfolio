import menuLogo from "../assests/menu.png";
import profileLogo from "../assests/navbar-logo.png";
import "../styles/Navbar.css"
import { openSideBar } from "./SideBar";

const Navbar = () => {
    return (
        
    <header>
        <img className="menu" src={menuLogo} alt="menu icon" onClick={ openSideBar }/>

        <div className="logoNameContainer">
            <img className="nav-logo" src={profileLogo} alt="logo" />
            <p className="nav-name">Ronak Paul</p>
        </div>

        <nav>
            <ul className="navLinks">
                <li><a href="#">About</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Courses</a></li>
            </ul>
        </nav>
        <a href="#" className="contactButtonLink"><div>Contact</div></a>
        <div className="wiresContainer">
        </div>
    </header>
    );
}

export default Navbar;