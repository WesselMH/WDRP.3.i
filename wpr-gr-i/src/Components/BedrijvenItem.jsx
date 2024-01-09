import React from "react";
import { Link } from "react-router-dom";

function BedrijvenItem( naamHeader, content, content2) {
    return (
        <ul className="bedrijvenItem">
            <div className="bedrijvenItemHeader">
                <h2>{naamHeader}</h2>
            </div>
            {content}
            {content2}
        </ul>
    );
}
export default BedrijvenItem;