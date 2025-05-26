import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import './App.css';
import Countdown from "./components/Countdown";
import TravelInfo from "./pages/TravelInfo";
import Attire from "./pages/Attire";
import Faq from "./pages/Faq";
import Photos from "./pages/Photos";
import Registry from "./pages/Registry";

import Marseille from "./pages/Marseille";
import WeddingParty from "./pages/WeddingParty";
import Footer from "./components/Footer";
import EntryPage from "./pages/EntryPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAfterAccessDate, setIsAfterAccessDate] = useState(false);
  const [_, setIsDDay] = useState(false);

  useEffect(() => {
    const accessDate = new Date("2025-06-09").getTime();
    const dDayDate = new Date("2025-06-07").getTime();
    const currentDate = new Date().getTime();

    setIsAfterAccessDate(currentDate >= accessDate);
    setIsDDay(
      currentDate >= dDayDate &&
      currentDate < dDayDate + 86400000
    );
  }, []);

  const renderPage = () => {
    if (!isAuthenticated && !isAfterAccessDate) {
      return <EntryPage onCodeSubmit={(_code) => setIsAuthenticated(true)} />;
    }
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab}/>;
      case "events":
        return <Events />;
      case "accommodation":
        return <Accommodation />;
      case "travel-info":
        return <TravelInfo />;
      case "attire":
        return <Attire />;
      case "qa":
        return <Faq />;
      case "marseille":
        return <Marseille />;
      case "photos":
        return <Photos />;
      case "registry":
        return <Registry />;
      case "wedding-party":
        return <WeddingParty />;
      default:
        return <Home setActiveTab={setActiveTab}/>;
    }
  };

  return (
    <div className="container mx-auto my-5 relative">
      {isAuthenticated || isAfterAccessDate ? (
        <>
          <Countdown />
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <main className="mt-20">{renderPage()}</main>
          <Footer />
        </>
      ) : (
        renderPage()
      )}
    </div>
  );
};

export default App;
