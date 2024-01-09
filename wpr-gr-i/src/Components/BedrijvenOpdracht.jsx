import React from "react";
import { Link } from "react-router-dom";

function BedrijvenOpdracht({ opdracht }) {
    return (
        <div className="bedrijvenOpdracht">
            <Link to={opdracht.href}>
                <li key={opdracht.id}>
                    <strong>{opdracht.title}</strong>
                    <p>{opdracht.beschrijving}</p>
                </li>
            </Link>
        </div>
    );
}
export default BedrijvenOpdracht;