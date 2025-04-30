import { Dispatch, SetStateAction, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "accommodation", label: "Accommodation" },
    { id: "travel-info", label: "Travel Info" },
    { id: "marseille", label: "Marseille" },
    { id: "wedding-party", label: "Wedding Party" },
    { id: "photos", label: "Photos" },
    { id: "attire", label: "Attire" },
    { id: "qa", label: "Q + A" },
    { id: "things-to-do", label: "Things to Do" },
    { id: "registry", label: "Registry" },
    { id: "rsvp", label: "RSVP" },
  ];

  return (
    <nav className="font-abhaya text-[#130c0e] text-lg tracking-[2px]">
      <div className="container mx-auto p-4 flex justify-end">
        {/* Mobile Menu Button (Hidden on Larger Screens) */}
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-40"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = "auto"; // Restore scrolling
                }}
                className={`block text-center py-2 font-eb-garamond text-2xl transition-all ${
                  activeTab === tab.id ? "border-b-2 border-black text-black" : "text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabs for Larger Screens (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-6 flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-eb-garamond text-2xl ${
              activeTab === tab.id ? "border-b-2 border-black text-black" : "text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
