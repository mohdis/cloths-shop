import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : null} 
      ${isGoogleSignIn ? 'google-signin-button' : ''} 
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default CustomButton
