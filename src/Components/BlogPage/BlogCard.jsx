// BlogPost.js
import React from "react";
import img from "../../assets/blog.jpg";
import authorImg from "../../assets/profileImg.png";
function BlogCard({ title, category, author, blogImg }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 h-[450px]">
      <div className="mb-6">
        <img
          src={blogImg}
          alt=""
          className="w-full rounded-lg"
        />
      </div>
      <div className="bg-[#4B6BFB0D] text-[#4B6BFB] inline-block py-1 px-4 rounded-xl mr-2 font-medium">
            {category}
      </div>
      <div className="text-xl font-bold mb-2 mt-3">{title}</div>
      
      {category && (
        <div className="mb-2">
          
          {author && (
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <img
                  src={authorImg}
                  alt={`author's profile`}
                  className="rounded-full w-8 h-8 mr-1"
                />
                <span className="text-gray-500 font-semibold">{author}</span>
              </div>
              <span className="text-gray-500 ">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogCard;
