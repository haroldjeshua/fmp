import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const TopNav = () => {
  return (
    <div className="top-nav">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;

const Title = () => <h5 className="title-text">tailwind-css</h5>;

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-nav-icon" />
      ) : (
        <FaMoon size="24" className="top-nav-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-nav-icon" />;

const UserCircle = () => <FaUserCircle size="24" className="top-nav-icon" />;

export default TopNav;
