import './SaucePage.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import SauceComment from '../../components/SauceComment/SauceComment';


class SaucePage extends Component {

    render() {
        return (
            <div className='sauce-page'>
                <div className='sauce-page__head'>
                    <div className='sauce-page__head-left'>
                        <h1 className='sauce-page__head-title'>Arby's Sauce</h1>
                        <h2 className='sauce-page__head-subtitle'>Community Rating</h2>
                        <div className='sauce-page__head-rating'>4.5</div>
                    </div>
                    <div className='sauce-page__head-right'>
                        <button className='sauce-page__head-exit'>
                            <Link to ='/' className='sauce-page__head-exit--link'>x</Link>
                        </button>
                    </div>
                </div>
                <div className='sauge-page__comments'>
                    <div className='sauce-page__comments-head'>
                        <h2 className='sauce-page__comments-head-title'>Sauce Reviews</h2>
                            <button className='sauce-page__comments-head-cta'>Leave a Comment</button>
                        </div>
                        <div className='sauge-page__comments-list'>

                        </div>
                </div>
            </div>
        )
    }
}

export default SaucePage