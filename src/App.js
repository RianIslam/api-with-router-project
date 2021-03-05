import  {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [] = useState([])
  

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
