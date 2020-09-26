import React from 'react'
import { Link } from 'react-router-dom'

import './header.style.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CardIcon from '../card-icon/card-icon.component'
import CardDropdown from '../card-dropdown/card-dropdown.component'

const Header = ({ currentUser, hidden, signOutStart }) => {
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
          <div onClick={signOutStart} className="option">
            Sign out
          </div>
        ) : (
          <Link className="option" to="/sign">
            sign in
          </Link>
        )}
        <CardIcon />
      </div>
      {hidden ? null : <CardDropdown />}
    </div>
  )
}

export default Header
