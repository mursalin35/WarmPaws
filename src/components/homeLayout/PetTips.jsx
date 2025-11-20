import React, { use } from "react";
import { FaPaw, FaSnowflake } from "react-icons/fa";

const tipsPromise = fetch("/tips.json").then((res) => res.json());

const PetTips = () => {

   const tips = use(tipsPromise);
  
  return (
    <section className=" py-16">
      <div className=" mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#6B4226] flex justify-center items-center gap-2 mb-10">
          <FaSnowflake className="text-[#B87333]" /> Winter Care Tips
        </h2>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#EAD9C9]"
            >
              <FaPaw className="text-[#B87333] text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-[#6B4226] mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetTips;
