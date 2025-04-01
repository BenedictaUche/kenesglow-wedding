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
import Lagos from "./pages/Lagos";
import Photos from "./pages/Photos";
import Registry from "./pages/Registry";
import Rsvp from "./pages/Rsvp";
import Traditional from "./pages/Traditional";
import Footer from "./components/Footer";
import WeddingParty from "./pages/WeddingParty";
import EntryPage from "./pages/EntryPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAfterAccessDate, setIsAfterAccessDate] = useState(false);

  // Check if the current date is after April 25, 2025
  useEffect(() => {
    const accessDate = new Date("2025-04-25").getTime();
    const currentDate = new Date().getTime();
    setIsAfterAccessDate(currentDate >= accessDate);
  }, []);

  // Pages accessible before April 25, 2025
  const allowedPagesBeforeDate = ["home", "traditional", "events", "photos", "wedding-party"];

  const renderPage = () => {
    if (!isAuthenticated && !isAfterAccessDate) {
      return <EntryPage onCodeSubmit={(_code) => setIsAuthenticated(true)} />;
    }
    switch (activeTab) {
      case "home":
        return <Home />;
      case "traditional":
        return <Traditional />;
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
      case "lagos":
        return <Lagos />;
      case "photos":
        return <Photos />;
      case "registry":
        return <Registry />;
      case "rsvp":
        return <Rsvp />;
      case "wedding-party":
        return <WeddingParty />;
      default:
        return <Home />;
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
            isAfterAccessDate={isAfterAccessDate}
            allowedPagesBeforeDate={allowedPagesBeforeDate}
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
