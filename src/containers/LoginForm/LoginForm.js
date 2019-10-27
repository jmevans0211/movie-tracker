import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/index';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userInput: {
                email: '',
                password: '',
            },
            error: '',
            formReady: false,
            isLoggedIn: false

        }
      }

    handleChange = (e) => {
      this.setState({error: ''})
      let userInput = this.state.userInput;
      userInput = {...userInput, [e.target.name]: e.target.value}
      this.setState({userInput: userInput})
    }

    async checkInputsForValues() {
      this.setState({error: ''})     
      this.setState({formReady: false})
      if (this.state.userInput.email !== '' &&
        this.state.userInput.password !== '') {
        this.setState({formReady: true}, () => {
            console.log("form REady", this.state.formReady)
            console.log("email", this.state.userInput.email)
            console.log("password", this.state.userInput.email)
                })
            }
    }
    
    submitForm = async (e) => {
        e.preventDefault();
        await this.checkInputsForValues();    
        console.log("FORM READY STATUS", this.state.formReady)    
        if (!this.state.formReady) {
          this.setState({error: "Please fill out all inputs to log in."})
        } else {
          const userVerification = await getUser(this.state.userInput, 'http://localhost:3001/api/v1/login');
          this.validateResponse(userVerification)
        }
        
    }

    validateResponse = async (response) => {
        const { saveUser } = this.props;
        if (!response.ok && response.status === 404) {
            this.setState({error: "There was a problem with the server. Please try again"})
          }
        if (!response.ok) {
            const error = await response.json()
            this.setState({error: error.error})
          } else {
          const newUser = await response.json()
          saveUser(newUser);
          this.setState({isLoggedIn: true})
          this.resetInputs()
        }
      }

    resetInputs = () => {
      this.setState({
          userInput: {
              email: '',
              password: ''
          }
      })
    }


    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to = '/' />
        }
        return (
            <>
            <form className="login-form">
                <div className="sign-up-background">
                <h2> Login </h2>
                <input
                    className="email-input"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    className="password-input"
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={(e) => this.submitForm(e)}> LOGIN </button>

                <p> {this.state.error} </p>
                </div>
            </form>
        </>
        )
    }
}
    
export const mapDispatchToProps = dispatch => ({
    saveUser: currentUser => dispatch(saveUser(currentUser))
})

export default connect(null, mapDispatchToProps)(LoginForm)


