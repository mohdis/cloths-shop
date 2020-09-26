import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionPageWithContainer from '../collection/collection.container'
import CollectionOverviewWithContainer from '../../components/collection-overview/collections-overview.container'

import { fetchingCollectionsStart } from '../../redux/shop/shop.actions'

import './shop.style.scss'

const ShopPage = ({ fetchingCollectionsStart, match }) => {
  useEffect(() => {
    fetchingCollectionsStart()
  }, [fetchingCollectionsStart])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewWithContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageWithContainer}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCollectionsStart: () => dispatch(fetchingCollectionsStart()),
})
export default connect(null, mapDispatchToProps)(ShopPage)
