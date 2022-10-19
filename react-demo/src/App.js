import './App.css';
import {BrowserRouter as Router, Link, Route, Routes}  from 'react-router-dom';

import Counter from './Counter';
import ShoppingList from './ShoppingList';
import Home from './Home';
import Users from './Users';
import Navigation from './Navigation';
import UsersEx from './UsersEx';
import Peter from './Peter';


function App() {
  return (
    <Router>
      <nav>

        <Link to='/Home'>
        <button type="button">Home</button>
        </Link>
        <Link to='/ShoppingList'>
          <button type="button">ShoppingList</button>
        </Link>
        <Link to='/Counter'>
          <button type="button">Counter</button>
        </Link>
        <Link to='/Users'>
          <button type="button">Users</button>
        </Link>
        <Link to='/UsersEx'>
          <button type="button">UsersEx</button>
        </Link>
        <Navigation/>
      </nav>

      <Routes>

        <Route path='/ShoppingList' element={<ShoppingList/>}/>
        <Route path='/Home' element={ <Home/> }/>
        <Route path='/Users' element={ <Users/> }/>
        <Route path='/Counter' element={<Counter/> }/>
        <Route path='/UsersEx' element={<UsersEx/> }/>
        <Route path='/Peter' element={<Peter /> }/>



      </Routes>

    </Router>
  );
}

export default App;
