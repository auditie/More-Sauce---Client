import './LoginPage.scss';
import { Component } from 'react';

class LoginPage extends Component {
    state = {

    }

    render() {
        return (
            <div className='login-page'>
                <form className='login-page__user-info'>
                    <label for='email'>Email</label>
                    <input type='text' id='email' name='email' className='login-page__user-info-input'></input>
                    <label for='password'>Password</label>
                    <input type='text' id='password' name='password' className='login-page__user-info-input'></input>
                </form>
                <div className='home-page__buttons'>
                    <button type='submit' className='home-page__search-submit'>Pour Sauce</button>
                    <button type='submit' className='home-page__login'>Log In</button>
                </div>
            </div>
        )
    }
}

export default LoginPage