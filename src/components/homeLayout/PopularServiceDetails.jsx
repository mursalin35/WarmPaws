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
    return (
      <p className="text-center mt-10 text-[#5B3A1A] text-lg">
        Service not found!
      </p>
    );
  }

  const {
    serviceId,
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 bg-[#FFF8F1] rounded-3xl shadow-2xl mt-10 border border-[#EAD9C9]">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Service Image */}
      <div className="relative rounded-3xl overflow-hidden mb-6 shadow-lg">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-[#8B5E3B] text-white font-semibold px-3 py-1 rounded-xl">
          {category}
        </span>
      </div>

      {/* Service Info */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#5B3A1A] mb-3">
        {serviceName}
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <div>
          <p className="text-[#A47C55] font-medium">
            Provider: <span className="font-semibold">{providerName}</span>
          </p>
          <p className="text-[#A47C55] text-sm sm:text-base">
            Email: <a href={`mailto:${providerEmail}`} className="underline">{providerEmail}</a>
          </p>
        </div>
        <div className="flex gap-4">
          <p className="bg-[#FFE1C5] text-[#8B5E3B] font-semibold px-3 py-1 rounded-xl">
            💰 ${price}
          </p>
          <p className="bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-xl">
            ⭐ {rating}
          </p>
          <p className="bg-[#D4A373] text-white font-semibold px-3 py-1 rounded-xl">
            🐾 {slotsAvailable} Slots
          </p>
        </div>
      </div>

      <p className="text-[#5B3A1A] text-base sm:text-lg mb-6 leading-relaxed">
        {description}
      </p>

      {/* Divider */}
      <div className="h-[1px] bg-[#8B5E3B] mb-6"></div>

      {/* Booking Form */}
      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 border border-[#EAD9C9]">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5B3A1A] mb-5">
          Book This Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-[#5B3A1A] mb-2 font-medium text-sm sm:text-base">
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
              className="w-full p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373] text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#5B3A1A] mb-2 font-medium text-sm sm:text-base">
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
              className="w-full p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373] text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#8B5E3B] hover:bg-[#6C4428] text-white py-3 rounded-xl font-semibold text-base transition"
          >
            Book Now
          </button>
        </form>
      </div>

      {/* Service ID */}
      <p className="mt-6 text-sm text-gray-500 text-center">
        Service ID: {serviceId}
      </p>
    </div>
  );
};

export default PopularServiceDetails;
