import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout.jsx";
import ManageCoins from "../../Pages/ManageCoins/ManageCoins.jsx";
import MainHome from "../../Pages/Home/MainHome/MainHome.jsx";
import Login from "../../Pages/Login/Login.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import Description from "../../Pages/Description/Description.jsx";
import MyJobs from "../../Pages/MyJobs/MyJobs.jsx";

import CandidateProfile from "../../Pages/ViewProfiles/Candidates/CandidateProfile.jsx";
import Wallet from "../../Pages/Wallet/Wallet.jsx";
import FinalHomeScreen from "../../Pages/FinalHomeScreen/FinalHomeScreen.jsx";
import EmployeeLanding from "../../Pages/ViewProfiles/Employee/EmployeeLanding/EmployeeLanding.jsx";
import BuyCoins from "../../Pages/BuyCoins/BuyCoins.jsx";
import PaymentSummery from "../../Pages/PaymentSummery/PaymentSummery.jsx";
import AllJobs from "../../Pages/AllJobs/AllJobs.jsx";
import JobDetails from "../../Pages/JobDetails/JobDetails.jsx";
import JobSearch from "../../Pages/JobSearch/JobSearch.jsx";
import SearchCandidates from "../../Pages/SearchCandidates/SearchCandidates.jsx";
import BlogPage from "../../Pages/BlogPage/BlogPage.jsx";
import BlogDetail from "../../Components/BlogPage/BlogDetail.jsx";
import CandidateDashboard from "../../Layouts/DashboardLayouts/CandidateDashBoard/CandidateDashboard.jsx";
import SavedJobs from "../../Pages/DashboardPages/CandidateDashboard/SavedJobs.jsx";
import AppliedJobs from "../../Pages/DashboardPages/CandidateDashboard/AppliedJobs.jsx";
import ProfileMenu from "../../Pages/ViewProfiles/Employee/ProfileMenu/ProfileMenu.jsx";
import SearchCandidatesForm from "../../Pages/SearchCandidates/SearchCandidatesForm.jsx";
import EmployeeDashboard from "../../Layouts/DashboardLayouts/EmployeeDashboard/EmployeeDashboard.jsx";
import CandidatesDetails from "../../Pages/SearchCandidates/CandidatesDetails.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/description/:id",
        element: <Description />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },

      {
        path: "/view-profile",
        element: <CandidateProfile />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },

      {
        path: "/view-employee-landing",
        element: <EmployeeLanding />,
      },
      {
        path: "/bycoins",
        element: <BuyCoins />,
      },
      {
        path: "/payment-summery",
        element: <PaymentSummery />,
      },
      {
        path: "/manage-coins",
        element: <ManageCoins />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/job-search",
        element: <JobSearch />,
      },
      {
        path: "/blog-page",
        element: <BlogPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "candidate-details/:id",
        element: <CandidatesDetails />,
      },
    ],
  },
  {
    path: "/candidateDashboard",
    element: <CandidateDashboard />,

    children: [
      {
        path: "savedJobs",
        element: <SavedJobs />,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
    ],
  },
  {
    path: "/employee-dashboard",
    element: <EmployeeDashboard />,

    children: [
      {
        path: "post-a-newjob",
        element: <FinalHomeScreen />,
      },
      {
        path: "search-candidate-form",
        element: <SearchCandidatesForm />,
      },
      {
        path: "alljobs",
        element: <AllJobs />,
      },
      {
        path: "view-employee-profile",
        element: <ProfileMenu />,
      },
      {
        path: "search-candidate",
        element: <SearchCandidates />,
      },
    ],
  },
]);

export default router;
