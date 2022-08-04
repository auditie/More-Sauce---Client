import './RestaurantPage.scss';
import { Component } from 'react';
import SauceLink from '../../components/SauceLink/SauceLink';

class RestaurantPage extends Component {
    state = {

    }

    render() {
        return (
            <div className='restaurant-page'>
                <div className='restaurant-page__top'>
                    <div className='restaurant-page__about'>
                        <h1 className='restaurant-page__about-name'>Arby's</h1>
                        <h2 className='restaurant-page__about-subtitle'>Sauce List</h2>
                    </div>
                    <div className='restaurant-page__exit'>
                        <button className='restaurant-page__exit-button'>X</button>
                    </div>
                </div>
                <div className='restaurant-page__sauces'>
                    <SauceLink />
                    <SauceLink />
                    <SauceLink />
                    <SauceLink />
                    <SauceLink />
                    <SauceLink />
                    <SauceLink />
                </div>
            </div>
        )
    }
}

export default RestaurantPage