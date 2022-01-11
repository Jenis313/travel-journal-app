import React from "react";
import '../style.css'
export default function Nav(){
    return (
        <nav>
            <img src={require('../images/path.png')} />
            <h1>my travel journal.</h1>
        </nav>
    )
}