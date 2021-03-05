import  {useEffect, useState} from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
