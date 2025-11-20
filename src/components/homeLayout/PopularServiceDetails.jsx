import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PopularServiceDetails = () => {


  const service = useLoaderData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  if (!service) {
    return <p className="text-center mt-10 text-[#5B3A1A]">Service not found!</p>;
  }

  const {
    description,
    serviceName,
    image,
    price,
    rating,
    category,
    providerName,
    serviceId,
  } = service;

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10 bg-[#FFF8F1] rounded-2xl shadow-lg mt-6 sm:mt-10 border border-[#EAD9C9]">
      <title>{`Services | ${serviceId}`}</title>
      
      <Toaster position="top-center" reverseOrder={false} />

      {/* Service Image */}
      <img
        src={image}
        alt={serviceName}
        className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl mb-5"
      />

      {/* Service Info */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#5B3A1A] mb-2">
        {serviceName}
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 text-[#A47C55]">
        <p className="mb-1 sm:mb-0">{providerName}</p>
        <p>{category}</p>
      </div>

      <p className="text-base sm:text-lg text-[#5B3A1A] mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2 sm:gap-0">
        <p className="text-lg sm:text-xl font-semibold text-[#8B5E3B]">
          💰 ${price}
        </p>
        <p className="text-yellow-600 font-medium text-base sm:text-lg">
          ⭐ {rating}
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#8B5E3B] -mx-4 sm:-mx-6 mb-6"></div>

      {/* Booking Form */}
      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-[#EAD9C9]">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#5B3A1A] mb-4">
          Book This Service
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[#5B3A1A] mb-1 font-medium text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full p-2.5 text-black placeholder-gray-600 sm:p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373] text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#5B3A1A] mb-1 font-medium text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full p-2.5 text-black placeholder-gray-600 sm:p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373] text-sm sm:text-base"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#8B5E3B] hover:bg-[#6C4428] text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopularServiceDetails;
