import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const MainLayout = () => {
  return (
    <>
      <Countdown />
      <Tabs />
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/attire" element={<Attire />} />
          <Route path="/qa" element={<Faq />} />
          <Route path="/marseille" element={<Marseille />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/wedding-party" element={<WeddingParty />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAfterAccessDate, setIsAfterAccessDate] = useState(false);

  useEffect(() => {
    const accessDate = new Date("2025-06-09").getTime();
    const currentDate = new Date().getTime();
    setIsAfterAccessDate(currentDate >= accessDate);
  }, []);

  const shouldAllowAccess = isAuthenticated || isAfterAccessDate;

  return (
    <Router>
      <Routes>
        {/* Public Registry Route */}
        <Route path="/registry" element={<Registry />} />

        {/* Public Entry Route */}
        <Route
          path="/entry"
          element={<EntryPage onCodeSubmit={() => setIsAuthenticated(true)} />}
        />

        {/* Protected Main Routes */}
        {shouldAllowAccess ? (
          <Route path="/*" element={<MainLayout />} />
        ) : (
          <Route path="/*" element={<EntryPage onCodeSubmit={() => setIsAuthenticated(true)} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
