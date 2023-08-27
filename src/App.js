import Navbar from "./Components/Navbar";
import { SideBar } from "./Components/SideBar";
import introImage from "./assests/intro-image.png";
import "./styles/App.css"; 

const App = ()  => {
  return (
    <>
      <SideBar />
      <Navbar />

      <div className="punchLinesContainer">
        <p className="punchLine-1 punchLines">
            Crafting Tomorrow's Solutions in Lines of Code
        </p>
      </div>

      <div className="introContainer">
        <div className="introContainerAbout">
            <h1>Software Developer</h1>
            <p className="introContainerAboutName">Ronak Paul, 19y</p>
            <p className="introContainerAboutTalkTopic">Talks about #devops, #community, #education, #developers</p>
            <p className="tags">
              <p>Full stack developer</p>
              <p>Opensource Contributor</p>
              <p>AI/ML</p>
              <p>Cloud</p>
              <p>DevOps Enthusiast</p>
              <p>Content Creator</p>
            </p>
        </div>
        <div className="introContainerImage">
            <img src= { introImage } />
        </div>
      </div>

      <div className="skillsContainer">
          
      </div>
    </>
  );
}

export default App;
