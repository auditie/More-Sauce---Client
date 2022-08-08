import './RestaurantPage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantSauce from '../../components/RestaurantSauce/RestaurantSauce';

const RestaurantPage = (props) => {
    console.log(props.restaurant);
    console.log(props.sauces);
        return (
            <div className='restaurant-page'>
                <div className='restaurant-page__head'>
                    <div className='restaurant-page__head-left'>
                        <h1 className='restaurant-page__head-title'></h1>
                        <h2 className='restaurant-page__head-subtitle'>Sauce List</h2>
                    </div>
                    <div className='restaurant-page__head-right'>
                        <button className='restaurant-page__head-exit'>
                            <Link to ='/' className='restaurant-page__head-exit--link'>x</Link>
                        </button>
                    </div>
                </div>
                <div className='restaurant-page__sauce-list'>
                    // have them link to the current sauce id
                    <RestaurantSauce />
                    <RestaurantSauce />
                    <RestaurantSauce />
                </div>
            </div>
        )
}


export default RestaurantPage