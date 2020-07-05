import React from 'react'
import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserDocument } from '../../firebase/firebase.utils'
import './sign-up.style.scss'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confrimPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { displayName, email, password, confrimPassword } = this.state

    if (password !== confrimPassword) {
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createUserDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confrimPassword: '',
      })
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">Sign up Now</h2>
        <span>Enter your Email and password</span>
        <form onSubmit={this.handleSubmit}></form>
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={this.state.displayName}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="password"
          name="confrimPassword"
          label="Confrim Password"
          value={this.state.confrimPassword}
          onChange={this.handleChange}
          required
        />
        <CustomButton onClick={this.handleSubmit}>SIGN UP</CustomButton>
      </div>
    )
  }
}

export default Signup
