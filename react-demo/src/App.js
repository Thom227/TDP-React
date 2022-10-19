import './App.css';
import {BrowserRouter as Router, Link, Route, Routes}  from 'react-router-dom';

import Counter from './Counter';
import ShoppingList from './Components/States/ShoppingList';
import Home from './Components/Home';
import Users from './Components/Users';
import Navigation from './Components/Navigation';
import UsersEx from './Components/UsersEx';
import Peter from './Components/Peter';
import Poke from './Components/States/Poke';
import OMDB from './Components/OMDB';


function App() {
  return (
    <Router>
      <div >
      
        <nav>

          <Link to='/Home'>
          <button type="button">Home</button>
          </Link>
          <Link to='/Poke'>
          <button type="button"> Poke </button>
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
          <Link to='/OMDB'>
            <button type="button">OMDB</button>
          </Link>
          <Navigation/>
          <br/>
          <br/>
          
        </nav>
      </div>

      <Routes>

        <Route path='/ShoppingList' element={<ShoppingList/>}/>
        <Route path='/Home' element={ <Home/> }/>
        <Route path='/Users' element={ <Users/> }/>
        <Route path='/Counter' element={<Counter/> }/>
        <Route path='/UsersEx' element={<UsersEx/> }/>
        <Route path='/Peter' element={<Peter /> }/>
        <Route path='/Poke' element={<Poke/> }/>
        <Route path='/OMDB' element={<OMDB/> }/>

      </Routes>

    </Router>
  );
}

export default App;
