import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Hero from "../../components/Hero";

const DetailBlog = () => {
  const { id } = useParams();
  let index = id - 1;
  const { data: blog, loading, error } = useFetch();
  return (
    <>
      {loading && (
        <div className="loader-container absolute z-[9999] flex justify-center items-center bg-[#fff] w-screen h-screen top-0 left-0">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div>Error when get data from API</div>}
      {blog && (
        <div>
          <Hero titleBlogs={blog[index].title} />
          <div className="wrapper flex justify-center items-center p-5 px-10 mt-5 gap-16">
            <div className="content flex gap-3 flex-col justify-center items-start">
              <div className="title-blog text-2xl font-bold my-5">
                {blog[index].title}
              </div>
              <div className="body-blog text-xl">{blog[index].body}</div>
              <div className="author-blog text-sm">
                <i>Author: {blog[index].author}</i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailBlog;
