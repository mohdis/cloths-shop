import { createSelector } from 'reselect'

export const selectShop = (state) => state.shop
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)
export const selectCollectionsForCollectionPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
)
export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionName] : null
  )
export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
)
