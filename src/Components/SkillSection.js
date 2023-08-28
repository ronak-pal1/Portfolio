import "../styles/SkillSection.css";

const SkillSection = (props) => {
    return (
        <div className="skillSubContainer">
            <h1>{ props.name }</h1>
            <div className="subSkillSections">
                { props.children }
            </div>
        </div>
    );
}

export default SkillSection;