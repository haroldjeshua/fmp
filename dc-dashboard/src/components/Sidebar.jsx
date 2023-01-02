import React from "react";
import {
  AiTwotoneFire,
  AiOutlinePlus,
  AiFillThunderbolt,
} from "react-icons/ai";
import { FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<AiTwotoneFire size="32" />} />
      <SidebarIcon icon={<AiOutlinePlus size="32" />} />
      <SidebarIcon icon={<AiFillThunderbolt size="32" />} />
      <SidebarIcon icon={<FaPoo size="32" />} />
      <Divider />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon">
    {icon}
    <span className="sidebar-tooltip">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
