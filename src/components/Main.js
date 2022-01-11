import React from "react";
import '../style.css'
import data from '../data'
import Card from './Card';
export default function Main(){
    const cards = data.map((item) => {
        return (
            <Card data = {item} />
        )
    })
    return (
        <main>
            {cards}
        </main>
    )
}