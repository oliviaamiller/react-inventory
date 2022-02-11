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
        <h2>hello</h2>
        <header>
          {
            user && 
            <div>
              <NavLink
                activeClassName='active-class'
                to='/birds'>Birds List</NavLink>
              <NavLink
                activeClassName='active-class'
                to='/create'>Create Bird</NavLink>
              <button onClick={() => handleLogout()}>Logout</button>
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
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
