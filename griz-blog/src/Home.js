import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
  ]);


  const handleDelete = (id) => {
    const newBlogs = blogs.filter(b => b.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title={'Blogs'} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;