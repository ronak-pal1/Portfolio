import "../styles/SkillItem.css";

const SkillItem = (props) => {
    return (
        <>
            <div className="col"><div><img src= { props.url } /></div><h2>{ props.skillName }</h2></div>
        </>
    );
}

export default SkillItem;