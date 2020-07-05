import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.style.scss'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {currentUser ? (
          <div onClick={() => {
            auth.signOut()
          }} className='option'>Sign out</div>
        ) : (
            <Link className="option" to="/sign">
              sign in
            </Link>
          )}
      </div>
    </div>
  )
}

export default Header
