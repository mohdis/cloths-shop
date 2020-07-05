import React from 'react'
import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'
import { googleAuthSignin, auth } from '../../firebase/firebase.utils'
import './sign-in.style.scss'

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
  }
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Sign in your account</h2>
        <span>Enter your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            label="Email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="signin-buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={googleAuthSignin} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin
