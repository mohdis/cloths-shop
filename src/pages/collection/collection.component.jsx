import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.style.scss'

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <div className="title">{collection.title}</div>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProp = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProp)(CollectionPage)
