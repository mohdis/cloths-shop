import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './checkout.style.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
  selectCardItems,
  selectTotalPrice,
} from '../../redux/card/card.selectors'

const CheckoutPage = ({ cardItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      {cardItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}

      <div className="total">Total: ${`${totalPrice}`}</div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  totalPrice: selectTotalPrice,
})
export default connect(mapStateToProps)(CheckoutPage)
