import { useState } from "react";
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

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
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
        return <WeddingParty />
      default:
        return <Home />;
    }
  };

  return (
    <div className="container mx-auto my-5 relative">
      <Countdown />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="mt-20">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
