import './SaucePage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import SauceComment from '../../components/SauceComment/SauceComment';
import axios from 'axios';
import backArrow from '../../assets/icons/symbols/backarrow.svg';
import star from '../../assets/icons/symbols/star.svg';
import CommentSubmit from '../../components/CommentSubmit/CommentSubmit';

const API_URL = 'http://localhost:8080';


class SaucePage extends Component {
    state = {
        selectedSauce: null,
        sauceComments: [],
        ratings: []
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

    postComment = (e) => {
        e.preventDefault();
        console.log(e)
        const userNameInput = e.target.userName.value;
        const commentInput = e.target.comment.value;

        const newComment = {
            sauceId: this.state.selectedSauce.id,
            userName: userNameInput,
            comment: commentInput
        }

        axios.post(`${API_URL}/comments`, newComment)
        .then((response) => {
            console.log("Success!")
            this.setState({
                sauceComments: [response.data, ...this.state.sauceComments]
            })
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
    }

    componentDidMount() {
        //console.log(this.props)
        this.getRestaurantSauce(this.props.match.params.sauceId);

        axios.get(`${API_URL}/comments`)
        .then((response) => {
            //console.log(response.data);
            this.setState({
                sauceComments: response.data
            })
        })

        axios.get(`${API_URL}/ratings`)
        .then((response) => {
            this.setState({
                ratings: response.data
            })
        })
    }

    render() {
        const currentSauce = this.state.selectedSauce;
        console.log(currentSauce)
        if (!this.state.selectedSauce) {
            return (
                <h1>Loading...</h1>
            )
        }

        const filteredComments = this.state.sauceComments.filter(comment => comment.sauceId === currentSauce.id)

        const filteredRatings = this.state.ratings.filter(rating => rating.sauceId === currentSauce.id)
        const ratingNumbers = filteredRatings.map((item) => item.rating);
        const averageRating = ratingNumbers.reduce((a,b) => a + b, 0) / filteredRatings.length;
        const roundedRating = Math.round(10 * averageRating)/10;


        return (
            <div className='sauce-page'>
                <div className='sauce-page__head'>
                    <div className='sauce-page__head-left'>
                        <h1 className='sauce-page__head-title'>{currentSauce.sauceName}</h1>
                        <h2 className='sauce-page__head-subtitle'>Community Rating</h2>
                        <div className='sauce-page__head-rating'>{roundedRating} out of 5<img src={star} className='sauce-page__head-star' alt='star' /></div>
                    </div>
                    <div className='sauce-page__head-right'>
                        <button className='sauce-page__head-exit'>
                            <Link to ={`/restaurants/${currentSauce.restaurantID}` }className='sauce-page__head-exit--link'><img src={backArrow} alt='backwards arrow' className='sauce-page__head-exit-icon'/></Link>
                        </button>
                    </div>
                </div>
                <div className='sauge-page__comments'>
                    <div className='sauce-page__comments-head'>
                        <h2 className='sauce-page__comments-head-title'>Sauce Reviews</h2>
                            <button className='sauce-page__comments-head-cta'>Leave a Comment</button>
                        </div>
                        <div className='sauce-page__comment-input'>
                            <CommentSubmit postComment={this.postComment} />
                        </div>
                        <div className='sauce-page__comments-list'>
                            {
                                filteredComments.map((comment) => {
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