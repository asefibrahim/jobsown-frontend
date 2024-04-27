import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import BlogCard from "../../Components/BlogPage/BlogCard";
import axios from "../../api/axios";
import avater from "../../assets/avater.png";
import blogBanner from "../../assets/blog.jpg";
import "./BlogPage.css";
const BlogPage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center font-bold text-3xl text-blue-800 m-4 p-4">
        BLOG PAGE
      </div>
      <div className=" relative p-4">
        <img
          className="w-full h-96 object-cover rounded-xl "
          src={blogBanner}
          alt="Blog Banner"
        />
        <div className="absolute w-3/5 bottom-6 left-2 right-0 ps-8 pb-8 bg-black bg-opacity-0 text-white">
          <div className="my-1 bg-blue-600 text-white inline-block py-1 px-2 rounded-xl">
            Technology
          </div>
          <h1 className="text-3xl font-semibold my-1 leading-relaxed">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex items-center gap-4">
            <img
              src={avater}
              alt={"author profile"}
              className="rounded-full w-8 h-8 mr-1"
            />
            <span className="text-white font-semibold">Tracey Wilson</span>
            <span className="text-white">{"August 20, 2022"}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 m-4 py-4">
        {blogsData?.map((blog) => (
          <Link key={blog._id} to={`/blogs/${blog._id}`}>
            <BlogCard
              key={blog?.id}
              title={blog?.description}
              category={blog?.tags}
              author={blog?.authors_name}
              blogImg={blog?.content}
            />
          </Link>
        ))}
        {/* ... add more grid items with standardized square size */}
      </div>
    </div>
  );
};

export default BlogPage;
