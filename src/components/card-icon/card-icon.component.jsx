import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './card-icon.style.scss'

import { toggleCardHidden } from '../../redux/card/card.actions'
import { selectCardItemsCount } from '../../redux/card/card.selectors'

const CardIcon = ({ toggleCardHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
})
const mapStateToProps = createStructuredSelector({
  itemsCount: selectCardItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)
