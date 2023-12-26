import './App.css';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'Yoshi', age: 30 }

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
