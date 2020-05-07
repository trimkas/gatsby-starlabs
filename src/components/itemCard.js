import React from 'react'
import './itemCard.css'

const ItemCard = (props) => (
    <div className="itemCard">
        <img src={props.image} alt=""/>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>Rating: {props.rating}/5</p>
    </div>
)

export default ItemCard
