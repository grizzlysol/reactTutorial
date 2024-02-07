import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  const initName = "Mario";

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(b => b.id !== id);
    // setBlogs(newBlogs);
  }

  const [name, setName] = useState(initName);
  const handleReset = () => {
    setName(initName);
  }


  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'Blogs'} />}
      {/* <button onClick={() => setName("Luigi")}> Change Name </button>
      <button onClick={handleReset}> Reset Name </button>
      <p>{name}</p> */}
    </div>
  );
}

export default Home;