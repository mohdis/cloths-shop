import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collections-overview.component'

import { selectIsFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
})
const CollectionOverviewWithContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
)
export default CollectionOverviewWithContainer
