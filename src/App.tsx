import { useState } from "react";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import './App.css';
import Countdown from "./components/Countdown";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "events":
        return <Events />;
      case "accommodation":
        return <Accommodation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container mx-auto my-5 relative">
      <Countdown />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="mt-20">{renderPage()}</main>
    </div>
  );
};

export default App;
