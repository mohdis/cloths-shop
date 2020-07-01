import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.style.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo-container">
                    <Logo className="logo" />
                </div>
            </Link>
            <div className="options">
                <Link className='option'>shop</Link>
                <Link className='option'>contact</Link>
            </div>
        </div>
    )
}

export default Header