import React from "react";
export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <img src = {require(`../images/${props.data.imageUrl}`)} />
            <div className="card--details">
                <div className="location">
                    <img src={require(`../images/location-logo.png`)} className="location--logo" /> 
                    <h4 className="location--country">{props.data.title}</h4>
                    <p className="location--googleLink"><a href={props.data.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h2>{props.data.title}</h2>
                <strong>{props.data.startDate} - {props.data.endDate}</strong>
                <p>{props.data.description}</p>
            </div>
        </div>
    )
}