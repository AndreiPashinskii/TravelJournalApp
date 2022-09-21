import React from "react"
import Header from "./components/Header"
import Spot from "./components/Spot"
import data from "./data"

export default function App() {
    const travelCards = data.map((card) => {
                return <Spot 
                key={card.id}
                img={card.imageUrl}
                country={card.location}
                link={card.googleMapsUrl}
                title={card.title}
                startdate={card.startDate}
                enddate={card.endDate}
                about={card.description}
                />
    })
    
    return (
        <div>
            <Header />
            <div className="travelcards-container">
                {travelCards}
            </div>    
        </div>
    )
}