import React from "react";
import { useNavigate } from "react-router";
import { FaPaw } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F1] text-center px-4">
      {/* Cute Icon */}
      <div className="bg-[#B87333]/20 p-6 rounded-full mb-6">
        <FaPaw className="text-[#B87333] text-5xl" />
      </div>

      {/* Error Code */}
      <h1 className="text-[80px] font-extrabold text-[#B87333] leading-none mb-2">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-[#5A3A2E] mb-2">
        Oops! Page Not Found 🐶
      </h2>
      <p className="text-[#7A5D4A] max-w-md mb-8">
        Looks like your furry friend ran off with this page.  
        Don't worry — you can get back home safely!
      </p>

      {/* Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-[#B87333] cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-[#9b5b26] transition"
      >
        Go Back Home
      </button>
    
    </div>
  );
};

export default ErrorPage;
