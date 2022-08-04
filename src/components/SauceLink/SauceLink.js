import './SauceLink.scss';
import { Link } from 'react-router-dom';

const SauceLink = () => {
    return (
        <div className='sauce-link'>
            <Link to='/restaurants/:restaurantId/:sauceId' className='sauce-link__name'>Arby's Sauce</Link>
        </div>
    )
}

export default SauceLink