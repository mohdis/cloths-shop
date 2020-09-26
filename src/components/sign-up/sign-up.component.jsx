import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.style.scss'

const Signup = ({ signUpStart }) => {
  const [userCrenedial, setUserCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confrimPassword: '',
  })
  const { displayName, email, password, confrimPassword } = userCrenedial

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confrimPassword) {
      return
    }
    signUpStart({ email, password, displayName })
  }
  const handleChange = (event) => {
    const { value, name } = event.target
    setUserCredential({
      ...userCrenedial,
      [name]: value,
    })
  }
  return (
    <div className="sign-up">
      <h2 className="title">Sign up Now</h2>
      <span>Enter your Email and password</span>
      <form onSubmit={handleSubmit}></form>
      <FormInput
        type="text"
        name="displayName"
        label="Name"
        value={displayName}
        onChange={handleChange}
        required
      />
      <FormInput
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        name="confrimPassword"
        label="Confrim Password"
        value={confrimPassword}
        onChange={handleChange}
        required
      />
      <CustomButton onClick={handleSubmit}>SIGN UP</CustomButton>
    </div>
  )
}
const mapDispatchToProps = {
  signUpStart,
}
export default connect(null, mapDispatchToProps)(Signup)
