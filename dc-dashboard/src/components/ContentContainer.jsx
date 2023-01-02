import { BsPlusCircleFill } from "react-icons/bs";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">{/* Post Component */}</div>
      <BottomBar />
    </div>
  );
};

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100); // avaatar custom seed

  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt="/"
          className="avatar"
        />

        <div className="post-content">
          <p className="post-author">
            {name}
            <small className="timestamp">{timestamp}</small>
          </p>
          <p className="post-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const BottomBar = () => {
  <div className="bottom-bar">
    <PlusIcon />

    <input
      type="text"
      placeholder="Enter your message..."
      className="bottom-bar-input"
    />
  </div>;
};

const PlusIcon = () => {
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />;
};

export default ContentContainer;
