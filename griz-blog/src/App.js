import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
