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
        <a href="/">Home</a>
        <a href="/create" style={createButtonStyles}>
          New Blog
        </a>
      </div>
    </nav>
  );
}

export default NavBar;