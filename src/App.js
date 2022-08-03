import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PageHeader from './components/PageHeader/PageHeader';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        {/* <Route path='/signup' component={SignupPage} />*/}
        {/* <Route path='/login' component={LoginPage} />*/}
        {/* <Route path='/restaurants' component={RestaurantList} />*/}
        {/* <Route path='/restaurants/:restaurantId' component={Restaurant} />*/}
        {/* <Route path='/restaurants/:restaurantId/:sauceId' component={SauceItem} />*/}
      </Switch>
    </Router>
  );
}

export default App;
