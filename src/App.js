import Navbar from "./Components/Navbar";
import { SideBar } from "./Components/SideBar";
import SkillItem from "./Components/SkillItem";
import SkillSection from "./Components/SkillSection";
import introImage from "./assests/bannerImage.png";
import bannerHTML from "./assests/bannerHTML.png";

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
          <SkillSection name="Front End"> 
            <SkillItem url={ bannerHTML } skillName="HTML5"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="CSS"></SkillItem> 
            <SkillItem url={ bannerHTML } skillName="React.js"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Tailwind CSS"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Angular.js"></SkillItem>
          </SkillSection>

          <SkillSection name="Back End"> 
            <SkillItem url={ bannerHTML } skillName="JavaScript"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Node.js"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Express.js"></SkillItem>
          </SkillSection>

          <SkillSection name="Database"> 
            <SkillItem url={ bannerHTML } skillName="MongoDB"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="MySQL"></SkillItem>
          </SkillSection>

          <SkillSection name="Languages"> 
            <SkillItem url={ bannerHTML } skillName="Java"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="C"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="C++"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Python"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Kotlin"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Go"></SkillItem>
          </SkillSection>

          <SkillSection name="DevOps"> 
            <SkillItem url={ bannerHTML } skillName="Docker"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Kubernetes"></SkillItem>
            <SkillItem url={ bannerHTML } skillName="Git"></SkillItem>
          </SkillSection>
      </div>
    </>
  );
}

export default App;
