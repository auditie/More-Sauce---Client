import './HomePage.scss';
import { Component } from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/RestaurantsListItem';
import axios from 'axios';
import RestaurantListItem from '../../components/RestaurantsListItem/RestaurantsListItem';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        restaurantList: [],
        saucesList: [],
        selectedRestaurant: null,
        restaurantInput: ""
    }

    getRestaurant = id => {
        axios.get(`${API_URL}/restaurants/${id}`)
            .then((response) => {
                this.setState({
                    selectedRestaurant: response.data
                })
            })
    }

    getRestaurantSauces = (id) => {
        axios.get(`${API_URL}/sauces/${id}`)
            .then((response) => {
                this.setState({
                    saucesList: response.data
                })
            })
    }

    componentDidMount() {
        axios.get(`${API_URL}/restaurants`)
        .then((response) => {
            this.setState({
                restaurantList: response.data
            });
        })

        axios.get(`${API_URL}/sauces`)
        .then((response) => {
            this.setState({
                saucesList: response.data
            })
        })
    }

    compondentDidUpdate(prevProps, prevState) {
        if (this.state.restaurantList !== prevState.restaurantList) {
            console.log('Restaurant Found');
        }
    }

    componentDidUpdate(prevProps) {
        const previousRestaurantId = prevProps.match.params.restaurantId;
        const currentRestaurantId = this.props.match.params.restaurantId;
        if (previousRestaurantId !== currentRestaurantId) {
            this.getRestaurant(currentRestaurantId);
            this.getRestaurantSauces(currentRestaurantId);
        }
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            restaurantInput: event.target.value
        });
    }

    findRestaurants = (event) => {
        event.preventDefault();
        const restaurantArr = [];
        const restaurants = this.state.restaurantList;
        restaurants.map((restaurant) => {
            if(restaurant.name === this.state.restaurantInput) {
                restaurantArr.push(restaurant);
            }
            this.setState({ restaurantList: [] })
            this.setState({ restaurantList: restaurantArr })
        })
    }

    render() {
        return (
            <div className='restaurant-search'>
                <form className='restaurant-search__search-request' onSubmit={this.findRestaurants}>
                    <input type='text' 
                        placeholder='Search Restaurants...' 
                        className='restaurant-search__search-request-bar' 
                        id='restaurantName'
                        onChange={this.handleInput}
                        value={this.state.restaurantInput}
                    />
                    <button className='restaurant-search__search-request-start'>Go</button>
                </form>
                <div className='restaurant-search__restaurants'>
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