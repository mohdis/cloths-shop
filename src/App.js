import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignPage from './pages/sign-in-sign-out/sign-in-sign-out.component'
import Header from './components/header/header.component'
import { auth, createUserDocument } from './firebase/firebase.utils'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRefrence = await createUserDocument(user)
        docRefrence.onSnapshot((snapshot) => {
          const data = snapshot.data()
          this.setState({ currentUser: { id: snapshot.id, ...data } }, () => {
            console.log(this.state)
          })
        })
        console.log(user)
      } else {
        this.setState({ currentUser: null })
      }
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignPage} />
        </Switch>
      </div>
    )
  }
}

export default App
