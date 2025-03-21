import { useState } from "react";

const EntryPage = ({ onCodeSubmit }: { onCodeSubmit: (code: string) => void }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "KENEUGO2025") {
      onCodeSubmit(code);
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F8F8] font-abhaya">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Wedding Website</h1>
        <p className="text-lg text-gray-600 mb-6">
          Please enter the access code to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter Access Code"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#515151] text-white py-2 rounded-lg hover:bg-[#828282] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntryPage;
