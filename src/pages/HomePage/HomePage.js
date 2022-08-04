import './HomePage.scss';
import { Component } from 'react';

class HomePage extends Component {
    state = {

    }

    render() {
        return (
            <div className='home-page'>
                <input type='text' placeholder='Search Restaurants...' className='home-page__search' />
                <div className='home-page__buttons'>
                    <button type='submit' className='home-page__search-submit'>Pour Sauce</button>
                    <button type='submit' className='home-page__login'>Log In</button>
                </div>
            </div>
        )
    }
}

export default HomePage