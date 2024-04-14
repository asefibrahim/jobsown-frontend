import Navbar from "../../Shared/Navbar/Navbar";
import FooterNew from "../../Shared/FooterNew/index.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("myjobs") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("post-a-newjob") ||
    location.pathname.includes("manage-coins") ||
    location.pathname.includes("job-search") ||
    location.pathname.includes("description");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <FooterNew></FooterNew>}
    </div>
  );
};
export default MainLayout;
