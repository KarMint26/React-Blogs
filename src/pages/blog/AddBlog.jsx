import React, { useState } from "react";
import Hero from "../../components/Hero";
import { postDataApiLocal } from "../../api";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const dataBlog = { title, body: content, author };
    postDataApiLocal(dataBlog);
    navigate("/blogs");
  };
  return (
    <>
      <Hero titleBlogs={"Add Blog Here"} />
      <div className="wrapper-form flex flex-col justify-center items-center px-16 mt-16 mb-32">
        <div className="title-form text-2xl font-bold text-teal-500">
          <h1>Add Blog</h1>
        </div>
        <form onSubmit={handleForm}>
          <div className="field flex flex-col justify-center items-start gap-2 mt-5">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="text-slate-600 p-2 rounded-lg ring-1 pe-[4.8rem] outline-teal-300"
              id="title"
              placeholder="title blog"
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="field flex flex-col justify-center items-start gap-2 mt-5">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              placeholder="content blog"
              onChange={(e) => setContent(e.target.value)}
              cols="30"
              rows="5"
              className="text-slate-600 p-2 rounded-lg ring-1 outline-teal-300"
              required
            />
          </div>
          <div className="field flex flex-col justify-center items-start gap-2 mt-5">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="text-slate-600 p-2 mb-8 rounded-lg ring-1 pe-[4.8rem] outline-teal-300"
              id="author"
              placeholder="author blog"
              onChange={(e) => setAuthor(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 px-[8.8rem] py-2 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
