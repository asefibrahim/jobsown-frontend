import React from "react";
import linkIcon from "../../../assets/linkIcon.png";
import "./index.css";
const AboutCompany = () => {
  return (
    <div class="text-gray-800 custom-bg-about p-6 m-4">
      <div class="text-2xl text-gray-800 custom-col-blue p-2">
        About Company
      </div>
      <div class="text-lg p-2">
        blandit consectetur sagittis mauris. Pulvinar malesuada ultricies
        placerat mauris arcu amet. Sit quisque eget pulvinar cras. Enim neque
        faucibus quis porttitor at. Dui posuere accumsan feugiat pulvinar augue
        tellus neque. Eget placerat egestas nibh neque tempus nulla arcu lorem.
        Luctus quam montes. Lorem ipsum dolor sit amet consectetur. Turpis at
        blandit consectetur sagittis mauris. Pulvinar . malesuada ultricies
        placerat mauris arcu amet. Sit quisque eget pulvinar cras. Enim neque
        faucibus quis porttitor at. Dui posuere accumsan feugiat pulvinar augue
      </div>
      <div class="flex p-2">
        <div class="mr-2">
          <img src={linkIcon} alt="/" />
        </div>
        <div>blandit consectetur sagittis mauris</div>
      </div>
    </div>
  );
};

export default AboutCompany;
