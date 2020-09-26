import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  removeItem,
  addOneQuantity,
  removeOneQauntity,
} from '../../redux/card/card.actions'

import './checkout-item.style.scss'

const CheckoutItem = ({
  checkoutItem,
  removeItem,
  addOneQuantity,
  removeOneQauntity,
}) => {
  const { name, price, imageUrl, quantity } = checkoutItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeOneQauntity(checkoutItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addOneQuantity(checkoutItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(checkoutItem)}>
        &#10005;
      </div>
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (item) => dispatch(removeItem(item)),
//   addOneQuantity: (item) => dispatch(addOneQuantity(item)),
//   removeOneQauntity: (item) => dispatch(removeOneQauntity(item)),
// })

const mapDispatchToPropsWithBind = (dispatch) => ({
  dispatch,
  ...bindActionCreators(
    { removeItem, addOneQuantity, removeOneQauntity },
    dispatch
  ),
})

export default connect(null, mapDispatchToPropsWithBind)(CheckoutItem)
