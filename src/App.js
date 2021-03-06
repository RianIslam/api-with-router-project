import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetails from './components/FriendDetail/FriendDetails';


function App() {


  return (
    <Router className="App">
    <Switch>
      <Route exact path="/home">
      <Home/>
      </Route>
      <Route  exact path="/">
      <Home/>
      </Route>
      <Route exact path="/friend/:friendId">
        <FriendDetails/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>

    </Switch>
    

    </Router>
  );
}

export default App;
