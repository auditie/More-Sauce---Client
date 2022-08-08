import './RestaurantPage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantSauce from '../../components/RestaurantSauce/RestaurantSauce';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

class RestaurantPage extends Component {
    state = {
        selectedRestaurant: null,
        sauceList: [],
        filteredSauces: []
    }

    getRestaurant = id => {
        axios.get(`${API_URL}/restaurants/${id}`)
            .then((response) => {
                //console.log(response.data)
                this.setState({
                    selectedRestaurant: response.data
                })
            })
    }

    componentDidMount() {
        console.log(this.props)
        this.getRestaurant(this.props.match.params.restaurantId)

        axios
        .get(`${API_URL}/sauces`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                sauceList: response.data
            });
        })
    }


    render() {
        if (!this.state.selectedRestaurant) {
            return (
                <h1>Loading...</h1>
            )
        }

        const filteredSauces = this.state.sauceList.filter(sauce => sauce.restaurantID === this.state.selectedRestaurant.id)

        return (
            <div className='restaurant-page'>
                <div className='restaurant-page__head'>
                    <div className='restaurant-page__head-left'>
                        <h1 className='restaurant-page__head-title'>{this.state.selectedRestaurant.name}</h1>
                        <h2 className='restaurant-page__head-subtitle'>Sauce List</h2>
                    </div>
                    <div className='restaurant-page__head-right'>
                        <button className='restaurant-page__head-exit'>
                            <Link to ='/' className='restaurant-page__head-exit--link'>x</Link>
                        </button>
                    </div>
                </div>
                <div className='restaurant-page__sauce-list'>
                    {
                        filteredSauces.map((sauce) => {
                            console.log(sauce)
                            return <RestaurantSauce sauce={sauce} key={sauce.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}


export default RestaurantPage