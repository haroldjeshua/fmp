import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

const topics = ["tailwindcss", "react"];
const question = ["dark-mode", "@apply", "UI components"];
const random = ["plugins", "variants", "libraries"];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <div className="channel-container"></div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdon-header" onClick={() => setExpanded(!expanded)}>
        <h5
          className={
            expanded ? "dropdown-header-text-selected" : "dropdown-header-text"
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent text-opacity-75 my-auto ml-auto"
        />
      </div>
    </div>
  );
};

export default ChannelBar;
