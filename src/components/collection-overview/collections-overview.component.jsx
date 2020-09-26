import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForCollectionPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.style.scss'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherPropertis }) => {
      return <CollectionPreview key={id} {...otherPropertis} />
    })}
  </div>
)
const mapStateToProps = () =>
  createStructuredSelector({
    collections: selectCollectionsForCollectionPreview,
  })

export default connect(mapStateToProps)(CollectionsOverview)
