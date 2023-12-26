const Home = () => {
  const handleClick = (e) => {
    console.log('Hello World!', e);
  }

  const handleClickToo = (name, e) => {
    console.log('Hello ' + name + '!', e.target);
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickToo('Yoshi', e)}>Click Me Too!</button>
    </div>
  );
}

export default Home;