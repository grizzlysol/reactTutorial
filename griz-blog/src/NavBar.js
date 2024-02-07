import { Link } from 'react-router-dom';

const NavBar = () => {
  const createButtonStyles = {
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: '8px'
  }

  return (
    <nav className="navBar">
      <h1>Griz Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={createButtonStyles}>
          New Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;