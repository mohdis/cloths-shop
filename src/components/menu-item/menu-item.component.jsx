import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>

            <div className="background" style={{
                backgroundImage: `url(${imageUrl})`,
            }} />

            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)