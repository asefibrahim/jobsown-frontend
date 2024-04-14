import React from 'react'
import SidebarFields from "./SidebarFields.js";
import {useNavigate} from 'react-router-dom';
import "./index.css";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div class='custom-bg-sidebar border h-full m-2 rounded-lg'>
        {SidebarFields.map((val, key) => {
          return (
            <div
              class="text-2xl my-6 flex"
            >
              <div id={
                window.location.pathname === "/" + val.linkTo
                  ? "sideActive"
                  : "sideInactive"
              }>    </div>
              <div
                className="routeName"
                onClick={() => {
                  navigate(`/${val.linkTo}`)
                }}
              >
                {val.name}
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default Sidebar