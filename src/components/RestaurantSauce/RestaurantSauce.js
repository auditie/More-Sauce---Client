import './RestaurantSauce.scss';
import { Link } from 'react-router-dom';

const RestaurantSauce = ({ sauce }) => {
    return (
        <div className='restaurant-sauce'>
            <Link to={`/sauces/${sauce.id}`} className='restaurant-sauce__link'>
                <h2 className='restaurant-sauce__name'>{sauce.sauceName}</h2>
            </Link>
        </div>
    )
}

export default RestaurantSauce