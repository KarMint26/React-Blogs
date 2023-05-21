import ItemBlog from "../components/blogs/ItemBlog";
import Hero from "../components/Hero";
import useFetch from "../hooks/useFetch";
import { deleteDataApiLocal } from "../api";

const Home = ({ titleBlogs }) => {
  const { data: blogs, loading, error } = useFetch(); // Custom Hooks
  return (
    <div>
      <Hero titleBlogs={titleBlogs} />
      {error && (
        <div className="error text-red-600 text-3xl text-center my-5">
          Error when get data
        </div>
      )}
      {loading && (
        <div className="loading my-5 text-center text-3xl">Loading....</div>
      )}
      {blogs && <ItemBlog blogs={blogs} isButtonDelete={false} />}
    </div>
  );
};

export default Home;
