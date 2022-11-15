import React from 'react';
import './App.css';
import UnAuthenciated from './unAuthenciated-app';
import { Authenciated } from './authenciated-app';
import { useAuth } from './context/auth-context';

function App() {
  const { user, logout } = useAuth()
  return (
    <div className="App">
      {user ? <button onClick={() => logout()}>登出</button> : null}
      {user ? <Authenciated /> : <UnAuthenciated />}
    </div>
  );
}

export default App;
