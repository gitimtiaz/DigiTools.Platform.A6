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
            <span className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Supercharge Your{" "}Digital Workflow
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Access premium AI tools, design assets, templates, and productivity
              software-all in one place. Start creating faster today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-700 hover:to-violet-500 text-white font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-violet-200"
              >
                Explore Products
              </a>
              <a
                href="#demo"
                className=" border border-violet-700 hover:border-violet-500 text-violet-700 hover:text-violet-500 font-semibold px-7 py-3 rounded-full transition-all"
              >
                <FontAwesomeIcon icon={faPlay} className="mr-2" /> Watch Demo
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
