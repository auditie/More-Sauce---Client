import './SaucePage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import SauceComment from '../../components/SauceComment/SauceComment';
import axios from 'axios';
import backArrow from '../../assets/icons/symbols/backarrow.svg';

const API_URL = 'http://localhost:8080';


class SaucePage extends Component {
    state = {
        selectedSauce: null
    }

    getRestaurantSauce = (id) => {
        axios.get(`${API_URL}/sauces/${id}`)
            .then((response) => {
                // console.log(response.data)
                this.setState({
                    selectedSauce: response.data
                })
            })
    }

    componentDidMount() {
        console.log(this.props)
        this.getRestaurantSauce(this.props.match.params.sauceId)
    }

    render() {
        const currentSauce = this.state.selectedSauce;
        console.log(currentSauce)
        if (!this.state.selectedSauce) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <div className='sauce-page'>
                <div className='sauce-page__head'>
                    <div className='sauce-page__head-left'>
                        <h1 className='sauce-page__head-title'>{currentSauce.sauceName}</h1>
                        <h2 className='sauce-page__head-subtitle'>Community Rating</h2>
                        <div className='sauce-page__head-rating'>4.5</div>
                    </div>
                    <div className='sauce-page__head-right'>
                        <button className='sauce-page__head-exit'>
                            <Link to ={`/restaurants/${currentSauce.restaurantID}` }className='sauce-page__head-exit--link'><img src={backArrow} alt='backwards arrow'/></Link>
                        </button>
                    </div>
                </div>
                <div className='sauge-page__comments'>
                    <div className='sauce-page__comments-head'>
                        <h2 className='sauce-page__comments-head-title'>Sauce Reviews</h2>
                            <button className='sauce-page__comments-head-cta'>Leave a Comment</button>
                        </div>
                        <div className='sauge-page__comments-list'>
                            {
                                currentSauce.comments.map((comment) => {
                                    return <SauceComment comment={comment} />
                                })
                            }
                        </div>
                </div>
            </div>
        )
    }
}

export default SaucePage