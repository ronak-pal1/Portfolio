import "../styles/YoutubeSection.css";

const YoutubeSection = () => {
    return (
        <div className="youtubeSection">
            <h1>Youtube</h1>
            <div>
                <iframe src="https://www.youtube.com/embed/c9GtwcDlQMo?si=PhfKAyuwRev2Ho0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/PcSDDhqriD8?si=pX_hEex3Ee95E0u6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <a href="https://www.youtube.com/@CodaGo" target="_blank" rel="noreferrer"><button>Explore More</button></a>
        </div>
    );
}

export default YoutubeSection;