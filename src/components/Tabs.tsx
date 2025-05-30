import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "events", label: "Events", path: "/events" },
    { id: "accommodation", label: "Accommodation", path: "/accommodation" },
    { id: "travel-info", label: "Travel Info", path: "/travel-info" },
    { id: "marseille", label: "Marseille", path: "/marseille" },
    { id: "wedding-party", label: "Wedding Party", path: "/wedding-party" },
    { id: "photos", label: "Photos", path: "/photos" },
    { id: "attire", label: "Attire", path: "/attire" },
    { id: "qa", label: "Q + A", path: "/qa" },
    { id: "registry", label: "Registry", path: "/registry" },
    {
      id: "rsvp",
      label: "RSVP",
      external: "https://kene-ugo-wedding.crd.co",
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const isActive = (path: string) =>
    location.pathname === path || (path === "/" && location.pathname === "");

  return (
    <nav className="font-abhaya text-[#130c0e] text-lg tracking-[2px]">
      <div className="container mx-auto p-4 flex justify-end">
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
          }}
          className="text-gray-700 focus:outline-none md:hidden z-50 absolute top-0 right-5"
        >
          <motion.div
            key={isMobileMenuOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={32} /> : <AlignJustify size={32} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-40"
          >
            {tabs.map((tab) =>
              tab.external ? (
                <a
                  key={tab.id}
                  href={tab.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block text-center py-2 font-eb-garamond text-2xl text-gray-700"
                >
                  {tab.label}
                </a>
              ) : (
                <Link
                  key={tab.id}
                  to={tab.path!}
                  onClick={closeMobileMenu}
                  className={`block text-center py-2 font-eb-garamond text-2xl transition-all ${
                    isActive(tab.path!) ? "border-b-2 border-black text-black" : "text-gray-700"
                  }`}
                >
                  {tab.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Tabs */}
      <div className="hidden md:flex space-x-6 flex-wrap justify-center">
        {tabs.map((tab) =>
          tab.external ? (
            <a
              key={tab.id}
              href={tab.external}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-eb-garamond text-2xl text-gray-700"
            >
              {tab.label}
            </a>
          ) : (
            <Link
              key={tab.id}
              to={tab.path!}
              className={`px-4 py-2 font-eb-garamond text-2xl transition-all ${
                isActive(tab.path!) ? "border-b-2 border-black text-black" : "text-gray-700"
              }`}
            >
              {tab.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Tabs;
