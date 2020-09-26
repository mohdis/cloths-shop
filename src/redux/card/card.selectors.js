import { createSelector } from 'reselect'

const selectCard = (state) => state.card

export const selectHidden = createSelector([selectCard], (card) => card.hidden)

export const selectCardItems = createSelector(
  [selectCard],
  (card) => card.items
)

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  (cardItems) =>
    cardItems.reduce((accumalture, item) => accumalture + item.quantity, 0)
)
export const selectTotalPrice = createSelector([selectCardItems], (cardItems) =>
  cardItems.reduce((accumalture, item) => accumalture + item.price, 0)
)
