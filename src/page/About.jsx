import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 mt-10 bg-[#FFF8F1] rounded-3xl shadow-lg border border-[#EAD9C9]">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#5B3A1A] mb-6">
        About WarmPaws
      </h1>

      <p className="text-[#5B3A1A] text-lg sm:text-xl leading-relaxed mb-6 text-center">
        At <span className="font-semibold text-[#D4A373]">WarmPaws</span>, we are
        dedicated to keeping your furry friends happy, cozy, and healthy all
        year round. From winter coats and paw care to nutritious meals, our
        services ensure your pets feel loved and comfortable.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-[#FFE1C5] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-[#8B5E3B] mb-3">Our Mission</h2>
          <p className="text-[#5B3A1A] leading-relaxed">
            We aim to provide the best winter care services and products for
            pets, ensuring warmth, comfort, and happiness.
          </p>
        </div>
        <div className="bg-[#FFE1C5] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-[#8B5E3B] mb-3">Our Vision</h2>
          <p className="text-[#5B3A1A] leading-relaxed">
            To become the most trusted pet winter care brand, spreading joy
            and health for every paw.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[#A47C55] text-lg sm:text-xl font-medium">
          Join our WarmPaws family and make your pet's winter extra cozy! 🐾
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
