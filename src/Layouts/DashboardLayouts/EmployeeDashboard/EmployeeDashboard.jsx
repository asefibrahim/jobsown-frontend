import { Outlet } from "react-router-dom";
import Header from "../../../Pages/FinalHomeScreen/Header";
import Sidebar from "../../../Pages/FinalHomeScreen/SideBar";
import { useState } from "react";

const EmployeeDashboard = () => {
    const [menuWidth, setMenuWidth] = useState("w-80");
    const [menuSmall, setMenuSmall] = useState(false);
    return (
        <div>
            <Header menuSmall={menuSmall} setMenuSmall={setMenuSmall} />
            <div className="flex max-w-7xl mx-auto gap-10">
                <Sidebar menuSmall={menuSmall} setMenuSmall={setMenuSmall}></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default EmployeeDashboard;