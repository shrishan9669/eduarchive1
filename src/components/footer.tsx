import { useNavigate } from "react-router-dom";

export default function Footer() {
  const nav = useNavigate();
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-800 via-black to-gray-900 py-6 px-6 md:px-10 text-white border-t border-gray-700">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <h1 className="text-2xl font-bold font-serif">
          <span className="text-pink-600">Edu</span>Archive
        </h1>
        <p className="text-sm text-gray-400 text-center md:text-left">
          Your one-stop platform for past papers
        </p>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex flex-col md:flex-row items-center md:items-start  gap-4 md:gap-6 mt-4 md:mt-0">
        <p
          onClick={() => nav("/")}
          className="cursor-pointer hover:text-pink-600 transition-all duration-300 font-medium"
        >
          Home
        </p>
        <p className="cursor-pointer hover:text-pink-600 transition-all duration-300 font-medium">
          Contact Us
        </p>
        <p className="cursor-pointer hover:text-pink-600 transition-all duration-300 font-medium">
          Terms
        </p>
        <p className="cursor-pointer hover:text-pink-600 transition-all duration-300 font-medium">
          Contributors
        </p>
        <p className="cursor-pointer hover:text-pink-600 transition-all duration-300 font-medium">
          College
        </p>
      </div>

      {/* Right Section: Social Links (Placeholder) */}
      <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
        <p className="text-sm text-gray-400">Follow Us</p>
        <div className="flex gap-4">
          <a href="#" className="text-pink-600 hover:text-pink-400 transition-all duration-300">Facebook</a>
          <a href="#" className="text-pink-600 hover:text-pink-400 transition-all duration-300">Twitter</a>
          <a href="#" className="text-pink-600 hover:text-pink-400 transition-all duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
