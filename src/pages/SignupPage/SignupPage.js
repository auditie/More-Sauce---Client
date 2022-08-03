import './SignupPage.scss';
import { Component } from 'react';

class SignupPage extends Component {
    state = {

    }

    render() {
        return (
            <div className='signup-page'>
                <form className='signup-page__user-info'>
                    <label for='username' className='signup-page__user-info-label'>Username</label>
                    <input type='text' id='username' name='username' className='signup-page__user-info-input signup-page__user-info-input--first'></input>
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