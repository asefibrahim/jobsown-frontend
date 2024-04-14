// BlogPost.js
import React from "react";
function BlogCard({ title, category, author }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 h-[450px]">
      <div className="square-image p-4 mb-6">
        <img
          src="https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXF~5hcjJlNVM6KidWzjkdVcGXJuedTI-ys7H2rj0y02IzEpsLPIBMXBGnOrEa-CW4uNDZFy3Z-i0L8GYQpn52s4R5-3cUagxDi1DVYy1njkBKTWUnKyyXUYaEpultR8JHNm~R-LiU3qxm9y6csRlGJZFxLmaA06CvbDkdeAHiAch39SB-8THiZxKVgyH4U4HHF43qmYHDf61IyhwMtXnGR8b~pV1LKUFPo4q6sVu0dOixqcOI38662H2~eiqDnMKgouSCoUs23SwTB4jPaDulFxEvVuIQA0RfQkj8HKv~kq-XqArdWCTDasBATLTlHpfNHdlagjCr3UBbijP9A4yA__"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="text-2xl font-bold mb-2">{title}</div>
      {category && (
        <div className="mb-2">
          <div className="bg-blue-100 text-blue-700 inline-block py-1 px-2 rounded-xl mr-2">
            {category}
          </div>
          {author && (
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                {/* <img
                  src={author.image}
                  alt={`${author.name}'s profile`}
                  className="rounded-full w-8 h-8 mr-1"
                /> */}
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
