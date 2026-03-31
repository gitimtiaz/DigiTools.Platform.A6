import { Check } from "lucide-react";

const tagStyles = {
  "best-seller": "bg-amber-100 text-amber-700",
  popular: "bg-violet-100 text-violet-700",
  new: "bg-emerald-100 text-emerald-700",
};

const periodLabel = {
  monthly: "/mo",
  yearly: "/yr",
  "one-time": " One-Time",
};

const ProductCard = ({ product }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">

      {/* Tag */}
      <span
        className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
          tagStyles[tagType] || "bg-gray-100 text-gray-600"
        }`}
      >
        {tag}
      </span>

      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-violet-100 transition-colors">
          {icon}
        </div>
        <h3 className="text-gray-900 font-bold text-base leading-snug pr-16">{name}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm">{periodLabel[period] || period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={15} className="text-violet-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button - UI only, no handler yet */}
      <button
        className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white hover:shadow-md hover:shadow-violet-200 transition-all"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;
