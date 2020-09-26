import cardActionTypes from './card.types'

export const toggleCardHidden = () => {
  return { type: cardActionTypes.TOGGLE_CARD_HIDDEN }
}
export const addItem = (item) => ({
  type: cardActionTypes.ADD_ITEM,
  payload: item,
})
export const addOneQuantity = (item) => ({
  type: cardActionTypes.ADD_ONE_QUANTITY,
  payload: item,
})
export const removeOneQauntity = (item) => ({
  type: cardActionTypes.REMOVE_ONE_QUANTITY,
  payload: item,
})
export const removeItem = (item) => ({
  type: cardActionTypes.REMOVE_ITEM,
  payload: item,
})
export const clearCard = () => ({
  type: cardActionTypes.CLEAR_CARD,
})
