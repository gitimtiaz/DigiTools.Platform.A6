const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9",  label: "Rating" },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-violet-700 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1">
                {stat.value}
              </div>
              <div className="text-violet-200 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
