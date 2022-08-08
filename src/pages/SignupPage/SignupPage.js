import './SignupPage.scss';
import { Component } from 'react';
import axios from 'axios';

const API_URL = `http://localhost:8080/signup`;

class SignupPage extends Component {
    state = {
        isSignedUp: false,
        isLoggedIn: false,
        isLoginError: false,
        errorMessage: '',
    }

    handleSignup = (e) => {
        e.preventDefault();
        axios
          .post(API_URL, {
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value
          })
          .then((response) => {
            console.log(response);
            this.setState({
              isSignedUp: true,
            });
          })
          .catch((err) => console.log(err));
      };

    render() {
        return (
            <div className='signup-page'>
                <form className='signup-page__user-info'>
                    <label for='userName' className='signup-page__user-info-label'>Username</label>
                    <input type='text' id='userName' name='userName' className='signup-page__user-info-input signup-page__user-info-input--first'></input>
                    <label for='email' className='signup-page__user-info-label'>Email</label>
                    <input type='text' id='email' name='email' className='signup-page__user-info-input signup-page__user-info-input--second'></input>
                    <label for='password' className='signup-page__user-info-label'>Password</label>
                    <input type='text' id='password' name='password' className='signup-page__user-info-input'></input>
                </form>
                <div className='signup-page__buttons'>
                    <button type='submit' className='signup-page__signup'>Signup</button>
                    <button type='submit' className='signup-page__cancel'>Cancel</button>
                </div>
            </div>
        )
    }
}

export default SignupPage