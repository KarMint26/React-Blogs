import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemBlog = ({ blogs, deleteBlogs, isButtonDelete }) => {
  return (
    <div className="mt-20 px-24">
      <div className="wrapper text-xl gap-10 text-black flex flex-col justify-center items-center">
        {blogs.map((blog, index) => {
          const blogRoute = `/blogs/${blog.id}`;
          return (
            <div
              className="blog-list cursor-auto hover:-translate-y-2 hover:bg-slate-200 transition duration-200 flex-col p-5 ring-slate-400 ring-1 shadow-md rounded-md flex gap-3"
              key={blog.id}
            >
              <div className="title-blog font-bold text-2xl">{blog.title}</div>
              <div className="body-blog">
                {blog.body.slice(0, 150)}...{" "}
                <Link
                  to={blogRoute}
                  className="text-blue-400 hover:underline transition"
                >
                  Read More
                </Link>
              </div>
              <div className="author-blog text-sm">
                {" "}
                Author:
                <i> {blog.author}</i>
              </div>
              {isButtonDelete && (
                <>
                  <button
                    type="submit"
                    className="text-white w-24 h-10 px-3 flex justify-center items-center shadow-md hover:bg-red-700 transition duration-150 py-2 bg-red-600 rounded-lg"
                    onClick={() => deleteBlogs(blog.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemBlog;
