import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './header.component'

import { selectHidden } from '../../redux/card/card.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
})
// const mapDispatchToProps = (dispatch) => ({
//   signOutStart: () => dispatch(signOutStart),
// })
const mapDispatchToProps = {
  signOutStart,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
