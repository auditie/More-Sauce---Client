import './HomePage.scss';
import { Component } from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/RestaurantsListItem';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import RestaurantSearch from '../../components/RestaurantSearch/RestaurantSearch';
import RestaurantPage from '../RestaurantPage/RestaurantPage';

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
                // console.log(response.data)
                this.setState({
                    selectedRestaurant: response.data
                })
            })
    }

    getRestaurantSauces = (id) => {
        axios.get(`${API_URL}/sauces/${id}`)
            .then((response) => {
                // console.log(response.data)
                this.setState({
                    saucesList: response.data
                })
            })
    }

    componentDidMount() {
        axios.get(`${API_URL}/restaurants`)
        .then((response) => {
            // console.log(response.data);
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
        // console.log(event.target.value);
        this.setState({
            restaurantInput: event.target.value
        });
    }

    // // this needs work
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

    render() {
        return (
            <div className='home-page'>
                <Switch>
                    <Route path='/' exact component={(routerProps) => {
                        return (
                        <RestaurantSearch 
                        restaurants={this.state.restaurantList}
                        handleInput={this.handleInput}
                        findRestaurant={this.findRestaurants}
                        restaurantInput={this.state.restaurantInput}
                        />
                        )
                    }} />
                    <Route path='/restaurants/:restaurantId' exact component={(routerProps) => {
                        return (
                            <RestaurantPage 
                                restaurant={this.state.selectedRestaurant}
                                sauces={this.state.saucesList}
                            />
                        )
                    }} />

                </Switch>
            </div>
        )
    }
}

export default HomePage