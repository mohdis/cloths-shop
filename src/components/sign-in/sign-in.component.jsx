import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions'

import './sign-in.style.scss'

const Signin = ({ emailSignInStart, googleSignInStart }) => {
  const [userCrendenial, setUserCredenial] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCrendenial

  const handleChange = (event) => {
    const { value, name } = event.target

    setUserCredenial({
      ...userCrendenial,
      [name]: value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    emailSignInStart({ email, password })

    setUserCredenial({ email: '', password: '' })
  }

  return (
    <div className="sign-in">
      <h2 className="title">Sign in your account</h2>
      <span>Enter your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="signin-buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
const mapDispatchToProps = {
  emailSignInStart,
  googleSignInStart,
}
export default connect(null, mapDispatchToProps)(Signin)
