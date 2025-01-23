import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavItems } from "../../config"; // Import your config file
import { ChevronLeft, ChevronRight } from "lucide-react";

const SideBar = () => {
    const navItems = NavItems();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
        const saved = window.localStorage.getItem("sidebarExpanded");
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        window.localStorage.setItem("sidebarExpanded", JSON.stringify(isSidebarExpanded));
    }, [isSidebarExpanded]);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    }

    return(
        <div className="flex">
            <div
                className={`${
                    isSidebarExpanded ? "w-[200px]" : "w-[68px]"
                } h-full bg-[#7fb598] rounded-tr-lg rounded-br-lg 
                border-r transition-all duration-300`}
            >
                <aside className="flex flex-col h-full px-4">
                    <div className="mt-4 flex flex-col space-y-2">
                        {navItems.map((item, idx) => (
                        <Fragment key={idx}>
                            <SideBarItem
                            label={item.name}
                            icon={item.icon}
                            path={item.href}
                            active={item.active}
                            isSidebarExpanded={isSidebarExpanded}
                            />
                        </Fragment>
                        ))}
                    </div>
                    <div className="mt-auto flex justify-center pb-4">
                        <button
                        onClick={toggleSidebar}
                        className="p-2 border rounded-full bg-[#7fb598] text-white shadow hover:shadow-md transition-all"
                        >
                        {isSidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export const SideBarItem: React.FC<{
    label: string;
    icon: React.ReactNode;
    path: string;
    active: boolean;
    isSidebarExpanded: boolean;
    }> = ({ label, icon, path, active, isSidebarExpanded }) => {
    return (
        <NavLink
        to={path}
        className={`flex items-center gap-2 p-2 rounded-md transition ${
            active ? "bg-white text-[#7fb598]" : "text-white hover:bg-gray-200 hover:text-[#7fb598]"
        }`}
        >
        <div className="flex items-center">
            {icon}
            {isSidebarExpanded && <span className="ml-2">{label}</span>}
        </div>
        </NavLink>
    );
};

export default SideBar;
