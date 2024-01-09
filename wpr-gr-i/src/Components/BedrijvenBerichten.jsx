import React from "react";
import { Link } from "react-router-dom";

function BedrijvenBerichten({ berichten }) {
    return (
        <div className="bedrijfPortaalBericht">
            <Link to={berichten.href}>
                <div className="bedrijfPortaalBerichtOnderwerp">
                    {berichten.onderwerp}
                </div>
                <p>{berichten.afzender}</p>
            </Link>
        </div>
    );
}
export default BedrijvenBerichten;