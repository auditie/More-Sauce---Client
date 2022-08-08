import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PageHeader from './components/PageHeader/PageHeader';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import SaucePage from './pages/SaucePage/SaucePage';
import logo from './assets/logo/moresaucelogo.svg';

function App() {
  return (
    <div className='app'>
    <Router>
        {/* <PageHeader /> */}
        <div className='content-container'>
          <img className='content-container__logo' src={logo} alt='more sauce logo' />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/sauces/:sauceId' component={SaucePage} />
            {/* <Route path='/restaurants' component={RestaurantList} />*/}
            <Route path='/restaurants/:restaurantId' component={RestaurantPage} />
            {/* <Route path='/restaurants/:restaurantId/:sauceId' component={SauceItem} />*/}
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
