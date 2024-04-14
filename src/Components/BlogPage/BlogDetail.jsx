// BlogDetail.js
import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "../../api/axios";
const BlogDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [blogInfo, setBlogInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/blogs/${id}`);
        setBlogInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  // const blog = blogInfo.find((blog) => blog.id === blogId);

  // if (!blog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <div>
      <div className="relative">
        {/* Full-width image */}
        <img
          className="w-full h-64 object-cover"
          src="https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXF~5hcjJlNVM6KidWzjkdVcGXJuedTI-ys7H2rj0y02IzEpsLPIBMXBGnOrEa-CW4uNDZFy3Z-i0L8GYQpn52s4R5-3cUagxDi1DVYy1njkBKTWUnKyyXUYaEpultR8JHNm~R-LiU3qxm9y6csRlGJZFxLmaA06CvbDkdeAHiAch39SB-8THiZxKVgyH4U4HHF43qmYHDf61IyhwMtXnGR8b~pV1LKUFPo4q6sVu0dOixqcOI38662H2~eiqDnMKgouSCoUs23SwTB4jPaDulFxEvVuIQA0RfQkj8HKv~kq-XqArdWCTDasBATLTlHpfNHdlagjCr3UBbijP9A4yA__"
          alt="{/* Alt Text */}"
        />

        {/* Details overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold mb-2">{blogInfo.title}</h1>
          <p className="text-sm mb-1">{blogInfo.created_at}</p>
          <p className="text-sm">Author{blogInfo.author_id}</p>
        </div>
      </div>
      <div className="m-12 px-4 max-w-5xl mx-auto text-2xl font-serif tracking-wide	">
        {/* Your blog content goes here */}
        {blogInfo.content}
      </div>
    </div>
  );
};

export default BlogDetail;
