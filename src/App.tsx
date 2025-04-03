import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
// import Home from "./pages/Home";
import Events from "./pages/Events";
// import Accommodation from "./pages/Accommodation";
import './App.css';
import Countdown from "./components/Countdown";
// import TravelInfo from "./pages/TravelInfo";
// import Attire from "./pages/Attire";
// import Faq from "./pages/Faq";
// import Lagos from "./pages/Lagos";
import Photos from "./pages/Photos";
// import Registry from "./pages/Registry";
// import Rsvp from "./pages/Rsvp";
import Traditional from "./pages/Traditional";
import Footer from "./components/Footer";
import WeddingParty from "./pages/WeddingParty";
import EntryPage from "./pages/EntryPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("traditional"); // Start with Traditional as default
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAfterAccessDate, setIsAfterAccessDate] = useState(false);

  // Check if the current date is after April 25, 2025
  useEffect(() => {
    const accessDate = new Date("2025-04-25").getTime();
    const currentDate = new Date().getTime();
    setIsAfterAccessDate(currentDate >= accessDate);
  }, []);

  // Only these pages should be accessible
  const allowedTabs = ["traditional", "events", "photos", "wedding-party"];

  const renderPage = () => {
    if (!isAuthenticated && !isAfterAccessDate) {
      return <EntryPage onCodeSubmit={(_code) => setIsAuthenticated(true)} />;
    }
    switch (activeTab) {
      case "traditional":
        return <Traditional />;
      case "events":
        return <Events />;
      case "photos":
        return <Photos />;
      case "wedding-party":
        return <WeddingParty />;
      default:
        return <Traditional />; // Fallback to Traditional
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
            allowedTabs={allowedTabs}
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
