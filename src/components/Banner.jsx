import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-white pt-12 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* New Feature Text */}
            <span className="inline-flex items-center gap-2 bg-[#E9EDFF] border border-violet-200 px-4 py-1.5 rounded-full">

              <span className="relative flex items-center justify-center w-5 h-5">
                <span className="absolute w-5 h-5 bg-violet-400/20 rounded-full"></span>
                <span className="absolute w-3.5 h-3.5 bg-violet-500/40 rounded-full"></span>
                <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
              </span>
              <span className="text-xs font-semibold bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#9333ea] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </span>
            </span>
            {/* Main Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Supercharge Your{" "}Digital Workflow
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Access premium AI tools, design assets, templates, and productivity
              software-all in one place. Start creating faster today.
            </p>
            {/* Btn Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="bg-gradient-to-r from-[#4f46e5] via-[#6d28d9] to-[#9333ea] 
                                              hover:from-[#4338ca] hover:via-[#5b21b6] hover:to-[#7e22ce]
                                              text-white font-semibold px-7 py-3 rounded-full 
                                              transition-all duration-300 ease-in-out 
                                              hover:shadow-lg hover:shadow-violet-300/40 hover:scale-[1.03]">
                Explore Products
              </a>
              <a href="#demo" className="inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#aa00b9]">
                <span className="flex items-center justify-center bg-white text-violet-700 hover:text-white hover:bg-transparent font-semibold px-7 py-3 rounded-full transition-all">
                  <FontAwesomeIcon icon={faPlay} className="mr-2" />
                  Watch Demo
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-100 rounded-3xl blur-3xl opacity-40 scale-110"></div>
              <img
                src={bannerImg}
                alt="Digital Workflow"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
