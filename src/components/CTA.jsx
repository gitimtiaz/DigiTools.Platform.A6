const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-violet-700 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-violet-200 text-base max-w-xl mx-auto mb-10">
          Join thousands of professionals who are already using DigiTools to work
          smarter. Start your free trial today — no credit card required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-white hover:bg-violet-50 font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:shadow-lg">
            <span className="bg-gradient-to-r from-[#4f46e5] via-[#6d28d9] to-[#9333ea] bg-clip-text text-transparent">
              Explore Products
            </span>
          </a>
          <a
            href="#pricing"
            className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
          >
            View Pricing
          </a>
        </div>

        <p className="text-violet-300 text-xs mt-8">
          14-day free trial · No credit card required · Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTA;
