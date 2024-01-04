cc import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import background from "./backgroundWithGradient.png";
import "./HomePortaal.css";

const headerButtons = [
    { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
    { Naam: "Uitloggen", href: "/" },
]

function HomePortaal(){
    return(
        <>
            <Header Titel={"HomePortaal"} Knoppen={headerButtons}></Header>
            <div className="HomePortaal" style={{ backgroundImage: `url(${background})`}}>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            </style>
                <div className="HomePortaal-Button-Container">
                    <Link to="/opdrachten" className="HomePortaal-Button"> Opdrachten</Link>
                    <Link to="/" className="HomePortaal-Button"> Afgeronde opdrachten</Link>
                </div>
                <div className="Newsfeed">
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/nzu1XvGKmPML2e10" frameborder="0"></iframe>                </div>

                </div>
        </>
    );
    
}
export default HomePortaal;