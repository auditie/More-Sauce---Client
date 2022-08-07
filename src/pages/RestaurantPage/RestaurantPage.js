import './RestaurantPage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantSauce from '../../components/RestaurantSauce/RestaurantSauce';

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
                        <button className='restaurant-page__head-exit'>
                            <Link to ='/' className='restaurant-page__head-exit--link'>x</Link>
                        </button>
                    </div>
                </div>
                <div className='restaurant-page__sauce-list'>
                    <RestaurantSauce />
                    <RestaurantSauce />
                    <RestaurantSauce />
                    <RestaurantSauce />
                    <RestaurantSauce />
                    <RestaurantSauce />
                    
                </div>
            </div>
        )
    }
}

export default RestaurantPage