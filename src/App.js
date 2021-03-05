import './App.css';
import Friend from './components/Friend/Friend';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


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
