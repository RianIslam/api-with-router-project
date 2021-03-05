import  {useEffect, useState} from 'react';
import './App.css';
import Friend from './components/Friend/Friend';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [friends, setFriends] = useState([])
  

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])

  return (
    <div className="App">
    <h1>Frinds: {friends.length}</h1>
    {
      friends.map(friends =><Friend friend={friends}/>)
    }
    </div>
  );
}

export default App;
