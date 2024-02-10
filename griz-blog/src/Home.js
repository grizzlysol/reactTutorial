import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'Blogs'} />}
    </div>
  );
}

export default Home;