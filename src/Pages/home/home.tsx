import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Rasooli Example
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is your home page. Start building your awesome app with React,
        TypeScript, and Tailwind CSS!
      </p>
      <Link to="/store">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
