import React from "react";
import {
  AiTwotoneFire,
  AiOutlinePlus,
  AiFillThunderbolt,
  AiFillSetting,
} from "react-icons/ai";
import { FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={<AiTwotoneFire size="32" />} text="Home" />
      <Divider />
      <SidebarIcon icon={<AiOutlinePlus size="32" />} text="Add" />
      <SidebarIcon
        icon={<AiFillThunderbolt size="32" />}
        text="Blazingly fast"
      />
      <SidebarIcon icon={<FaPoo size="32" />} text="Poo" />
      <Divider />
      <SidebarIcon icon={<AiFillSetting size="32" />} text="Poo" />
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
