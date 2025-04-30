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
import Photos from "./pages/Photos";
import Registry from "./pages/Registry";
import Rsvp from "./pages/Rsvp";
import Marseille from "./pages/Marseille";
import WeddingParty from "./pages/WeddingParty";
import Footer from "./components/Footer";

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
      case "rsvp":
        return <Rsvp />;
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
