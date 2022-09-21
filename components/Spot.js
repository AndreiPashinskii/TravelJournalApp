import React from "react"
import data from "../data"

export default function Spot(props) {
    return (
        <div className="spot--card">
            <img className="spot--img" src={props.img} />
            <div className="spot--info">
                <div className="spot--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="spot--country">{props.country}</p>
                    <a className="spot--link" href={props.link}>View on google maps</a>
                </div>
                <h1 className="spot--name">{props.title}</h1>
                <p className="spot--dates">{props.startdate} - {props.enddate}</p>
                <p className="spot--about">{props.about}</p>
            </div>
        </div>
    )
}




// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg