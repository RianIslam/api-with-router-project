import './App.css';

function App() {
  const useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
