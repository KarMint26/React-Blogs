import React from "react";
import Hero from "../components/Hero";
import useFetch from "../hooks/useFetch";
import ItemBlog from "../components/blogs/ItemBlog";
import { Link, useNavigate } from "react-router-dom";
import { deleteDataApiLocal } from "../api";

const Blog = () => {
  const { data: blogs, loading, error } = useFetch(); // Custom Hooks
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteDataApiLocal(id);
    navigate("/");
  };
  return (
    <>
      <Hero titleBlogs={"My Blogs"} />
      {error && (
        <div className="error text-red-600 text-3xl text-center my-5">
          Error when get data
        </div>
      )}
      {loading && (
        <div className="loading my-5 text-center text-3xl">Loading...</div>
      )}
      {blogs && (
        <>
          <div className="container text-end pe-6 mt-10 -mb-5 flex items-center justify-between">
            <div className="list-blog ms-24 text-2xl text-slate-700 font-bold font-sans">
              List Blogs
            </div>
            <Link
              to="/blogs/add-blog"
              className="nav-link bg-teal-500 px-4 py-[0.65rem] hover:bg-teal-600 transition-colors duration-150 ease-in-out rounded-lg text-white shadow-lg"
            >
              Add Blog
            </Link>
          </div>
          <ItemBlog
            blogs={blogs}
            deleteBlogs={handleDelete}
            isButtonDelete={true}
          />
        </>
      )}
    </>
  );
};

export default Blog;
