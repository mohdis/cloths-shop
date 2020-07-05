import React from 'react'
import Signin from '../../components/sign-in/sign-in.component'
import Signup from '../../components/sign-up/sign-up.component'
import './sign-in-sign-out.style.scss'

const SignPage = () => {
  return (
    <div className="sign-in-sign-out">
      <Signin />
      <Signup />
    </div>
  )
}

export default SignPage
