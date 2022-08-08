import './RestaurantsListItem.scss';
import { Link } from 'react-router-dom';

const RestaurantsList = ({ restaurant }) => {
    return (
        <div className='restaurant'>
            <h2 className='restaurant__name'>{restaurant.name}</h2>
             <Link to={`/restaurants/${restaurant.id}`} className='restaurant__button'>Sauce Menu</Link> 
        </div>
    )
}

export default RestaurantsList