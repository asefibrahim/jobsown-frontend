import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./BlogPage.css";
import BlogCard from "../../Components/BlogPage/BlogCard";
import axios from "../../api/axios";

const BlogPage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/blogs");
      setBlogsData(response.data);
      console.log(response);
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
          src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qHPcmd5ErVvgo4ETMl-jfFhtbpTsz9FxGGvkC5nC8y8QL7CBAxC0o7F1fjshayi4uCix7SraAe5tzOW2YVUdhRpyG0W6XoFATCnwMZxM3IQMiOyYmpdfA6bxUF-pIxJAUMXhOhkcv94uSxthb6Cp40~g1TB1lSDSPr~9qqnCtPRiqsPj4Q9e7TgdFOA3YiFz6XibCFPNt3t-5onMDEnqdz8Yx6m0Mr2uyrHVFfbG0cxf9WL98x4XKcU0uqEkjwDBd0hYbYKnsNet6-fCB5ma7cxdNoo71q3rMU2sbRByq9QYDZRrmnfNfmQTuCMtnY8Sp-N3rTqi71k8mYIzGxz1lA__"
          alt="{/* Alt Text */}"
        />
        <div className="absolute max-w-[650px] bottom-6 left-2 right-0 ps-8 pb-8 bg-black bg-opacity-0 text-white">
          <div className="my-1 bg-blue-600 text-white inline-block py-1 px-2 rounded-xl">
            Technology
          </div>
          <h1 className="text-3xl font-semibold my-1">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex items-center gap-4">
            {/* <img
                  src={author.image}
                  alt={`${author.name}'s profile`}
                  className="rounded-full w-8 h-8 mr-1"
                /> */}
            <span className="text-white font-semibold">Tracey Wilson</span>
            <span className="text-white">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 m-4 p-4">
        {blogsData?.map((blog) => (
          <Link key={blog._id} to={`/blogs/${blog._id}`}>
            <BlogCard
              key={blog.id}
              title={blog.description}
              category={blog.tags}
              author={blog.authors_name}
            />
          </Link>
        ))}
        {/* ... add more grid items with standardized square size */}
      </div>
    </div>
  );
};

export default BlogPage;
