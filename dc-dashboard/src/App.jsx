import Sidebar from "./components/Sidebar";
import "./App.css";
import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
