import data from "../../helpers/data";

import React from "react";

function Cards() {
    return (
        <div className="cards">
            {data.map((item) => (
                <div className="card">
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="City" />
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
