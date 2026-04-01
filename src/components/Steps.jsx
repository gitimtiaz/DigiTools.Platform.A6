import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
    fallback: "👤",
  },
  {
    number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
    fallback: "📦",
  },
  {
    number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
    fallback: "🚀",
  },
];

const Steps = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center gap-5 shadow-sm pb-20"
            >
              <span className="absolute top-4 right-4 w-9 h-9 bg-violet-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-violet-200">
                {step.number}
              </span>
              <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center mt-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-3xl hidden">{step.fallback}</span>
              </div>
              <h3 className="text-gray-900 font-bold text-xl">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
