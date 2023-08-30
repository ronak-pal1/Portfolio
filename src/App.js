import React, {useEffect} from 'react';
import Navbar from "./Components/Navbar";
import { SideBar } from "./Components/SideBar";
import SkillItem from "./Components/SkillItem";
import SkillSection from "./Components/SkillSection";
import introImage from "./assests/bannerImage.png";
import bannerHTML from "./assests/banners/bannerHTML.png";
import bannerCSS from "./assests/banners/bannerCSS.png";
import bannerReact from "./assests/banners/bannerReact.png";
import bannerTailwind from "./assests/banners/bannerTailwind.png";
import bannerAngular from "./assests/banners/bannerAngular.png";
import bannerJavascript from "./assests/banners/bannerJavascript.png";
import bannerTypescript from "./assests/banners/bannerTypescript.png";
import bannerNodejs from "./assests/banners/bannerNodejs.png";
import bannerExpressjs from "./assests/banners/bannerExpressjs.png";
import bannerMongodb from "./assests/banners/bannerMongoDB.png";
import bannerMySQL from "./assests/banners/bannerMySQL.png";
import bannerFirebase from "./assests/banners/bannerFirebase.png";
import bannerJava from "./assests/banners/bannerJava.png";
import bannerC from "./assests/banners/bannerC.png";
import bannerCpp from "./assests/banners/bannerCPP.png";
import bannerPython from "./assests/banners/bannerPython.png";
import bannerKotlin from "./assests/banners/bannerKotlin.png";
import bannerDocker from "./assests/banners/bannerDocker.png";
import bannerKubernetes from "./assests/banners/bannerKubernetes.png";
import bannerGit from "./assests/banners/bannerGit.png";
import bannerGo from "./assests/banners/bannerGo.png";
import "./styles/App.css"; 
import AOS from "aos";
import "aos/dist/aos.css";

const App = ()  => {

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  return (
    <>
      <SideBar />
      <Navbar />

      <div className="punchLinesContainer">
        <p className="punchLine-1 punchLines" data-aos="zoom-in">
            Crafting Tomorrow's Solutions in Lines of Code
        </p>
      </div>

      <div className="introContainer" data-aos="zoom-in">
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
            <img src= { introImage } alt="introPic"/>
        </div>
      </div>


      <div className="skillsContainer">
          <SkillSection name="Front End"> 
            <SkillItem url={ bannerHTML } skillName="HTML5"></SkillItem>
            <SkillItem url={ bannerCSS } skillName="CSS"></SkillItem> 
            <SkillItem url={ bannerReact } skillName="React.js"></SkillItem>
            <SkillItem url={ bannerTailwind } skillName="Tailwind CSS"></SkillItem>
            <SkillItem url={ bannerAngular } skillName="Angular.js"></SkillItem>
          </SkillSection>

          <SkillSection name="Back End" className="ss skill2"> 
            <SkillItem url={ bannerJavascript } skillName="JavaScript"></SkillItem>
            <SkillItem url={ bannerTypescript } skillName="TypeScript"></SkillItem>
            <SkillItem url={ bannerNodejs } skillName="Node.js"></SkillItem>
            <SkillItem url={ bannerExpressjs } skillName="Express.js"></SkillItem>
          </SkillSection>

          <SkillSection name="Database" className="ss skill3"> 
            <SkillItem url={ bannerMongodb } skillName="MongoDB"></SkillItem>
            <SkillItem url={ bannerMySQL } skillName="MySQL"></SkillItem>
            <SkillItem url={ bannerFirebase } skillName="Firebase"></SkillItem>
          </SkillSection>

          <SkillSection name="Languages" className="ss skill4"> 
            <SkillItem url={ bannerJava } skillName="Java"></SkillItem>
            <SkillItem url={ bannerC } skillName="C"></SkillItem>
            <SkillItem url={ bannerCpp } skillName="C++"></SkillItem>
            <SkillItem url={ bannerPython } skillName="Python"></SkillItem>
            <SkillItem url={ bannerKotlin } skillName="Kotlin"></SkillItem>
            <SkillItem url={ bannerGo } skillName="Go"></SkillItem>
          </SkillSection>

          <SkillSection name="DevOps" className="ss Skill5"> 
            <SkillItem url={ bannerDocker } skillName="Docker"></SkillItem>
            <SkillItem url={ bannerKubernetes } skillName="Kubernetes"></SkillItem>
            <SkillItem url={ bannerGit } skillName="Git & GitHub"></SkillItem>
          </SkillSection>
      </div>
    </>
  );
}

export default App;
