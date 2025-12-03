import React, { useEffect, use } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const petPromise = fetch("/accessories.json").then((res) => res.json());

const Accessories = () => {
  const accessories = use(petPromise);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleBuyNow = (itemName) => {
    toast.success(`Purchase successful! You bought "${itemName}"`);
  };

  return (
    <section className=" py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          🐾 Pet Winter Accessories
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore cozy and stylish accessories to keep your pets warm and happy
          throughout the winter season.
        </p>

        <div className="grid grid-cols-1  gap-8">
          {accessories.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 border border-[#EAD9C9]"
              data-aos="fade-up"
              data-aos-delay={index * 10}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left border-t-2 border-[#d6b08d]">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm my-2">{item.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#B87333] font-bold">{item.price}</span>
                  <button
                    onClick={() => handleBuyNow(item.name)}
                    className="bg-[#B87333] cursor-pointer text-white text-sm px-3 py-1 rounded-lg hover:bg-[#a15f2a] transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
