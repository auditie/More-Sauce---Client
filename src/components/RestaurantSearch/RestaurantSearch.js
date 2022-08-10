import './RestaurantSearch.scss';
import RestaurantsListItem from '../../components/RestaurantsListItem/RestaurantsListItem';

const RestaurantSearch = (props) => {

    return (
        <div className='restaurant-search'>
            <form className='restaurant-search__search-request' onSubmit={props.findRestaurant}>
                <input type='text' 
                    placeholder='Search Restaurants...' 
                    className='restaurant-search__search-request-bar' 
                    id='restaurantName'
                    onChange={props.handleInput}
                    value={props.inputRestaurant}
                />
                <button className='restaurant-search__search-request-start' type='submit' >Go</button>
            </form>
            <div className='restaurant-search__restaurants'>
                {
                    props.restaurants.map((restaurant) => {
                        return <RestaurantsListItem restaurant={restaurant} key={restaurant.id} />
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantSearch