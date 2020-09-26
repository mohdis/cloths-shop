import { connect } from 'react-redux'
import { compose } from 'redux'

import CollectionPage from './collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionLoaded(state),
})

const CollectionPageWithContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageWithContainer
