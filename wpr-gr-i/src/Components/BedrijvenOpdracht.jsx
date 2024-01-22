import React from "react";
import { Link } from "react-router-dom";

function BedrijvenOpdracht({ opdracht }) {
    console.log("BedrijvenOpdracht")
    console.log(opdracht)

    return (
        <div className="bedrijvenOpdracht">
            <Link to={`/BedrijvenPortaal/${opdracht.id}`}>
                <li key={opdracht.id}>
                    <strong>{opdracht.titel}</strong>
                    <p>{opdracht.beschrijving}</p>
                </li>
            </Link>
        </div>
    );
}
export default BedrijvenOpdracht;