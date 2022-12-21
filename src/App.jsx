import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import './App.css'
import Calendar from "./Calendar.jsx"
import { auth } from "./Firebase"
import Login from './Login';
import UserSettings from './UserSettings';

var currentUser = auth.currentUser;

function logOut() {
    signOut(auth).then(() => console.log("Signed Out.")).catch((error) => console.log(error));
  }

function App() {
  const [loggedIn, setLoggedIn] = useState(currentUser);

  onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(user);
        var currentUser = auth.currentUser;
      } else {
        setLoggedIn(null);
        var currentUser = auth.currentUser;
      }
    }, (error) => console.log(error));

  if (loggedIn) {
    return (
      <div>
        <UserSettings />
        <Calendar />
        <button onClick={logOut}>Logout</button>
      </div>
      )
  } else {
    return <Login />
  }
}

export default App
