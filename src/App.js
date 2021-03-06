import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  NavLink, 
  Route, 
  Redirect
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import AuthPage from './AuthPage';
import CreateBird from './Birds/CreateBird';
import BirdDetail from './Birds/BirdDetail';
import BirdList from './Birds/BirdList';
import UpdateBird from './Birds/UpdateBird';

function App() {
  const [user, setUser] = useState('');
  
  async function handleLogout() {
    await logout();
    setUser('');
  }

  useEffect(() => {
    async function fetch() {
      const currentUser = await getUser();

      setUser(currentUser);
    }
    fetch();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className='nav'>
          <h2>bird<br/>life<br/>list</h2>
          {
            user && 
            <div className='nav-links'>
              <NavLink
                activeClassName='active-class'
                to='/birds'>Birds List</NavLink>
              <NavLink
                activeClassName='active-class'
                to='/create'>Add Bird</NavLink>
              <button className='logout' onClick={() => handleLogout()}>Logout</button>
            </div>
          }
        </header>
        <section>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='/birds' />
                  : <AuthPage setUser={setUser} />
              }
            </Route>

            <Route exact path='/birds'>
              {
                user  
                  ? <BirdList />
                  : <Redirect to='/' />
              }
            </Route>

            <Route exact path='/birds/:id'>
              {
                user
                  ? <BirdDetail />
                  : <Redirect to='/' />
              }
            </Route>

            <Route exact path='/create'>
              {
                user
                  ? <CreateBird />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/birds/:id/update'>
              {
                user
                  ? <UpdateBird />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
