// BlogDetail.js
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "../../api/axios";
const BlogDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [blogInfo, setBlogInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://jobsown-server.vercel.app/api/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlogInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const blog = blogInfo.find((blog) => blog.id === blogId);

  // if (!blog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Full-width image */}
        <img
          className="w-full h-[500px] object-cover"
          src={blogInfo?.content}
          alt="blog image"
        />

        {/* Details overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold mb-2">{blogInfo?.tags}</h1>
          <p className="text-sm mb-1">22 Nov 2023</p>
          <p className="text-sm">Author: {blogInfo?.authors_name}</p>
        </div>
      </div>
      <div className="m-12 px-0 max-w-5xl mx-auto text-2xl font-serif tracking-wide	">
        {/* Your blog content goes here */}
        {blogInfo?.description}
      </div>
    </div>
  );
};

export default BlogDetail;
