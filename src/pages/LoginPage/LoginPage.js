import './LoginPage.scss';
import { Component } from 'react';
import axios from 'axios';

const API_URL = `http://localhost:8080/login`;

class LoginPage extends Component {
    state = {
        isSignedUp: false,
        isLoggedIn: false,
        isLoginErro: false,
        errorMessage: ''
    };

    // handleLogin = (e) => {
    //     e.preventDefault();
    //     axios
    //     .post(`${API_URL}`, { 
    //         userName: e.target.userName.value, 
    //         password: e.target.password.value
    //     })
    //     .then((respose) => {
    //         console.log(response);
    //         sessionStorage.setItem('token', response.data.token);
    //         this.setState({
    //             isLoggedIn: true,
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         this.setState({ isLoginError: true, errorMessage: err });
    //     });
    // };

    render() {
        return (
            <div className='login-page'>
                <form className='login-page__user-info' onSubmit={this.handleLogin}>
                    <label for='userName' className='login-page__user-info-label'>User Name</label>
                    <input type='text' id='userName' name='userName' className='login-page__user-info-input login-page__user-info-input--first'></input>
                    <label for='password' className='login-page__user-info-label'>Password</label>
                    <input type='text' id='password' name='password' className='login-page__user-info-input'></input>
                </form>
                <div className='login-page__buttons'>
                    <button type='submit' className='login-page__search-submit'>Pour Sauce</button>
                    <button type='submit' className='home-page__login'>Log In</button>
                </div>
            </div>
        )
    }
}

export default LoginPage