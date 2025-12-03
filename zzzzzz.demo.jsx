import React from "react";
import { FaStar, FaRegClock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularServiceCard = ({ service, delay }) => {
  const {
    serviceId,
    serviceName,
    image,
    price,
    rating,
    category,
    slotsAvailable,
    description,
    providerName,
    providerEmail,
  } = service;

  return (
    <div
      className="bg-gradient-to-b from-[#FFF8F1] to-[#FFEFD6] rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-[#EAD9C9] overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-[#A47C55] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col justify-between h-[300px]">
        <div>
          <h2 className="text-xl font-bold text-[#5B3A1A] mb-2 line-clamp-2">
            {serviceName}
          </h2>
          <p className="text-sm text-[#A47C55] mb-3 line-clamp-3">{description}</p>

          {/* Provider */}
          <div className="flex items-center text-[#5B3A1A] text-sm mb-3 space-x-2">
            <FaEnvelope className="text-[#A47C55]" />
            <span className="font-medium">{providerName}</span>
          </div>

          {/* Rating & Slots */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <span className="ml-1 text-[#5B3A1A] font-medium">{rating}</span>
            </div>
            <div className="flex items-center text-sm text-[#A47C55]">
              <FaRegClock className="mr-1" />
              <span>{slotsAvailable} slots</span>
            </div>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold text-[#8B5E3B] mb-2">
            ${price} 
            <span className="text-sm font-normal text-[#A47C55]"> / service</span>
          </p>
        </div>

        {/* View Details Button */}
        <Link to={`/services/${serviceId}`}>
          <button className="mt-2 w-full bg-[#A47C55] hover:bg-[#8B5E3B] text-white font-medium py-2 rounded-xl transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServiceCard;
