import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import CardItem from '../card-item/card-item.component'

import './card-dropdown.style.scss'

import { selectCardItems } from '../../redux/card/card.selectors'
import { toggleCardHidden } from '../../redux/card/card.actions'

const CardDropdown = ({ cardItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cardItems.length ? (
          cardItems.map((item) => <CardItem key={item.id} {...item} />)
        ) : (
          <span className="empty-list">Your list is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          dispatch(toggleCardHidden())
          history.push('/checkout')
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
})

export default withRouter(connect(mapStateToProps)(CardDropdown))
