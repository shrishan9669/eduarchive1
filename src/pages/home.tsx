import { FaFilePdf } from "react-icons/fa";
import { TbPdf } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white w-screen h-screen items-center justify-between">
      {/* Left Section */}
      <div className="flex-col p-8 ml-16 flex items-start max-w-lg space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Access Past Year's <span className="text-red-500">Question Papers</span>
          <TbPdf className="inline-block ml-2 text-red-600" />
        </h1>
        <p className="text-lg font-light">
          Streamline your preparation with a comprehensive collection of previous semester papers.
        </p>
        <button
          onClick={() => {
            nav("/login");
          }}
          className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center mr-16">
        <div className="relative">
          <FaFilePdf className="animate-bounce text-red-600 text-[250px] drop-shadow-lg" />
          <div className="absolute top-[40%] left-[15%] bg-white rounded-full w-10 h-10 opacity-25 blur-xl" />
          <div className="absolute top-[70%] left-[30%] bg-red-500 rounded-full w-6 h-6 opacity-50 blur-xl" />
        </div>
      </div>
    </div>
  );
}
