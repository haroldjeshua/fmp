import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { BsHash } from "react-icons/bs";

const topics = ["tailwindcss", "react"];
const questions = ["dark-mode", "@apply", "UI components"];
const random = ["plugins", "variants", "libraries"];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <ChannelBlock />
      <div className="dropdon-header" onClick={() => setExpanded(!expanded)}>
        <ChevronIcon expanded={expanded} />
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
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevronClass = "text-accent text-opacity-75 my-auto mr-1";

  return expanded ? (
    <FaChevronDown size="16" className={chevronClass} />
  ) : (
    <FaChevronRight size="16" className={chevronClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className="dropdown-selection">
    <BsHash size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);

const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
);

export default ChannelBar;
