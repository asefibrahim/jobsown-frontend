import { Outlet } from "react-router-dom";
import Header from "../../../Pages/FinalHomeScreen/Header";
import Sidebar from "../../../Pages/FinalHomeScreen/SideBar";

const EmployeeDashboard = () => {
    return (
        <div>
            <Header />
            <div className="flex max-w-7xl mx-auto">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default EmployeeDashboard;