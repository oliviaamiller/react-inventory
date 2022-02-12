import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';
import './App.css';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();

    const returningUser = await signIn(email, password);

    setUser(returningUser);
    setEmail('');
    setPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const newUser = await signUp(email, password);

    setUser(newUser);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='auth'>
      <form>
        <input required type='email' value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)} />
        <input required type='password' value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>sign in</button>
        <button onClick={handleSignUp}>sign up</button>
      </form>
    </div>
  );
}
