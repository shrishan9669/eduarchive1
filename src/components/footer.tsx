// import { useNavigate } from "react-router-dom"

// export default function Footer(){
//     const nav = useNavigate()
//     return (
//         <div className="flex bg-black h-[87px] border border-white border-l-0 border-b-0 border-r-0 justify-center gap-10 items-center text-lg">
//             <span onClick={()=> nav('/')}  className="cursor-pointer text-white hover:bg-pink-700 transition-all duration-300  px-3 py-1 rounded-full  font-serif">Home</span>
//             <span className="cursor-pointer text-white hover:bg-pink-700 transition-all duration-300  px-3 py-1 rounded-full font-serif">Contact Us</span>
//             <span className="cursor-pointer text-white hover:bg-pink-700 transition-all duration-300 px-3 py-1 rounded-full font-serif">Terms</span>
//             <span className="cursor-pointer text-white hover:bg-pink-700 transition-all duration-300  px-3 py-1 rounded-full font-serif">Contributers</span>
//             <span className="cursor-pointer text-white hover:bg-pink-700 transition-all duration-300  px-3 py-1 rounded-full font-serif">College</span>
//         </div>
//     )
// }
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const nav = useNavigate();
  return (
    <footer className="flex flex-col w-[100vw] md:flex-row items-center justify-between bg-gradient-to-r from-gray-800 via-black to-gray-900 py-6 px-10 text-white border-t border-gray-700">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <h1 className="text-2xl font-bold font-serif">
          <span className="text-pink-600">Edu</span>Archive
        </h1>
        <p className="text-sm text-gray-400">Your one-stop platform for past papers</p>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="md:flex flex-col items-start w-full  gap-6 mt-4 md:mt-0">
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

      {/* Right Section: Social Links */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-all duration-300"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-all duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-all duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-all duration-300"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}
