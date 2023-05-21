import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import FirstBlog from "./components/blogs/blogs1/FirstBlog";
import SecondBlog from "./components/blogs/blogs2/SecondBlog";
import ThirdBlog from "./components/blogs/blogs3/ThirdBlog";
import AddBlog from "./pages/blog/AddBlog";
import DetailBlog from "./pages/blog/DetailBlog";

function App() {
  const title = "React Blogs";

  return (
    <>
      <Navbar title={title} />
      <Routes>
        <Route path="/" exact element={<Home titleBlogs={title} />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        {/* Add blog */}
        <Route path="/blogs/add-blog" element={<AddBlog />} />
        {/* Routes Blog Nested */}
        <Route path="/blogs/:id" element={<DetailBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
