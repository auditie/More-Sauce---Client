import './RestaurantsListItem.scss';
import { Link } from 'react-router-dom';

const RestaurantsList = () => {
    return (
        <div className='restaurant'>
            <h2 className='restaurant__name'>Chick-fil-A</h2>
            {/* <Link to='/' className='restaurant__button'>Sauce Menu</Link> */}
        </div>
    )
}

export default RestaurantsList