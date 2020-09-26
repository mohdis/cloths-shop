import React from 'react'
import './card-item.style.scss'

const CardItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="card-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  )
}
export default CardItem
