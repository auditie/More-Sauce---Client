import './RestaurantsListItem.scss';
import { Link } from 'react-router-dom';

const RestaurantsList = ({ restaurant }) => {
    console.log(restaurant)
    return (
        <div className='restaurant'>
            <div className='restaurant__left'>
                <img src={`../../assets/icons/logos/${restaurant.image}`} alt={`${restaurant.name} logo`} className='restaurant__logo' />
                <h2 className='restaurant__name'>{restaurant.name}</h2>
            </div>
             <Link to={`/restaurants/${restaurant.id}`} className='restaurant__button'>Sauce Menu</Link> 
        </div>
    )
}

export default RestaurantsList