import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignPage from './pages/sign-in-sign-out/sign-in-sign-out.component'
import HeaderWithContainer from './components/header/header.cotainer'

import { checkUserSesstion } from './redux/user/user.actions'

import './App.css'

import { selectCurrentUser } from './redux/user/user.selectors'

const App = ({ checkUserSesstion, currentUser }) => {
  useEffect(() => {
    checkUserSesstion()
  }, [checkUserSesstion])

  return (
    <div>
      <HeaderWithContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/sign"
          render={() => (currentUser ? <Redirect to="/" /> : <SignPage />)}
        />
      </Switch>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSesstion: () => dispatch(checkUserSesstion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
