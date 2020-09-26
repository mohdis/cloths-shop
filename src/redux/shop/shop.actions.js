import shopActionTypes from './shop.types'

export const fetchingCollectionsStart = () => ({
  type: shopActionTypes.FECHING_COLLECTIONS_START,
})
export const fetchingCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FECHING_COLLECTIONS_SUCCESS,
  payload: collections,
})
export const fetchingCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FECHING_COLLECTIONS_FAILURE,
  payload: errorMessage,
})
