import React from "react";
import "./Cards.css";
import WorkCard from "./EventCard";
import CardsData from "../../data/cardsData/CardsMinimal";

function Cards() {
    return (
        <div className="">
            <h1 className="text-center font-mono font-bold text-gray-400 text-6xl sm:text-8xl">
                Events
            </h1>
            <div className="">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                );
            </div>
        </div>
    );
}

export default Cards;

