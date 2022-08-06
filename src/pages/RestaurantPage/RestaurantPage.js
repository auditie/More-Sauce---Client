import './RestaurantPage.scss';
import { Component } from 'react';

class RestaurantPage extends Component {
    state = {

    }

    render() {
        return (
            <div className='restaurant-page'>
                <div className='restaurant-page__head'>
                    <div className='restaurant-page__head-left'>
                        <h1 className='restaurant-page__head-title'>Arby's</h1>
                        <h2 className='restaurant-page__head-subtitle'>Sauce List</h2>
                    </div>
                    <div className='restaurant-page__head-right'>
                        <button className='restaurant-page__head-exit'>x</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantPage