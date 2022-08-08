import './HomePage.scss';
import { Component } from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/RestaurantsListItem';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        restaurantList: [],
        restaurantInput: ""
    }

    componentDidMount() {
        axios.get(`${API_URL}/restaurants`)
        .then((response) => {
            // console.log(response.data);
            this.setState({
                restaurantList: response.data
            });
        })
    }

    handleInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            restaurantInput: event.target.value
        });
    }

    // this needs work
    findRestaurants = (event) => {
        event.preventDefault();
        const restaurantArr = [];
        const restaurants = this.state.restaurantList;
        restaurants.map((restaurant) => {
            if(restaurant.name === this.state.inputRestaurant) {
                restaurantArr.push(restaurant);
            }
            this.setState({ restaurantList: restaurantArr })
            console.log(this.state.restaurantList);
        })
        
    }

    compondentDidUpdate(prevProps, prevState) {
        if (this.state.restaurantList !== prevState.restaurantList) {
            console.log('Restaurant Found');
        }
    }

    render() {
        return (
            <div className='home-page'>
                <form className='home-page__search-request' onSubmit={this.findRestaurant}>
                    <input type='text' 
                    placeholder='Search Restaurants...' 
                    className='home-page__search-request-bar' 
                    id='restaurantName'
                    onChange={this.handleInput}
                    value={this.state.inputRestaurant}
                    />
                    <button className='home-page__search-request-start' type='submit' >Go</button>
                </form>
                {/* <div className='home-page__buttons'>
                    <button type='submit' className='home-page__search-submit'>Pour Sauce</button>
                    <button type='submit' className='home-page__login'>Log In</button>
                </div> */}
                <div className='home-page__restaurants'>
                    {
                        this.state.restaurantList.map((restaurant) => {
                            return <RestaurantsListItem restaurant={restaurant} key={restaurant.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomePage