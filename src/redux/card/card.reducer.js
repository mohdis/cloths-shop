import cardActionTypes from './card.types'

import {
  addItemToListItem,
  addOneQuantityItem,
  removeOneQuantityItem,
} from './card.utils'

const INITIAL_STATE = {
  hidden: true,
  items: [],
}

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardActionTypes.TOGGLE_CARD_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case cardActionTypes.ADD_ITEM:
      return { ...state, items: addItemToListItem(state.items, action.payload) }
    case cardActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    case cardActionTypes.ADD_ONE_QUANTITY:
      return {
        ...state,
        items: addOneQuantityItem(state.items, action.payload),
      }
    case cardActionTypes.REMOVE_ONE_QUANTITY:
      return {
        ...state,
        items: removeOneQuantityItem(state.items, action.payload),
      }
    case cardActionTypes.CLEAR_CARD:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default cardReducer
