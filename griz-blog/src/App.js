import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'Yoshi', age: 30 }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
