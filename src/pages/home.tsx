
import { FaFilePdf } from "react-icons/fa";
import { TbPdf } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white w-screen h-screen items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-col p-8 md:ml-16 items-center md:items-start text-center md:text-left max-w-lg space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Access Past Year's <span className="text-red-500">Question Papers</span>
          <TbPdf className="inline-block ml-2 text-red-600" />
        </h1>
        <p className="text-sm md:text-lg font-light">
          Streamline your preparation with a comprehensive collection of previous semester papers.
        </p>
        <button
          onClick={() => {
            nav("/login");
          }}
          className="px-6 py-3 md:px-8 md:py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center mt-10 md:mt-0 md:mr-16">
        <div className="relative">
          <FaFilePdf className="animate-bounce text-red-600 text-[150px] md:text-[250px] drop-shadow-lg" />
          <div className="absolute top-[40%] left-[15%] bg-white rounded-full w-6 h-6 md:w-10 md:h-10 opacity-25 blur-xl" />
          <div className="absolute top-[70%] left-[30%] bg-red-500 rounded-full w-4 h-4 md:w-6 md:h-6 opacity-50 blur-xl" />
        </div>
      </div>
    </div>
  );
}
