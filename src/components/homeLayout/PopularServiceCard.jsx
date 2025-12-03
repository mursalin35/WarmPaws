import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularServiceCard = ({ service, delay }) => {
  const { serviceId, serviceName, image, price, rating, category } = service;

  return (
    <div
      className="bg-[#FFF8F1] rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#EAD9C9] overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay} 
    >
      {/* Image */}
      <div className="h-56  overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full  h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col justify-between h-[230px]">
        <div>
          <h2 className="text-xl font-semibold text-[#5B3A1A] mb-1 line-clamp-1">
            {serviceName}
          </h2>
          <p className="text-sm text-[#A47C55] mb-3">{category}</p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 text-[#5B3A1A] font-medium">{rating}</span>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold text-[#8B5E3B]">
            ${price}
            <span className="text-sm text-[#A47C55] font-normal">/service</span>
          </p>
        </div>

        {/* View Details */}
        <Link to={`/services/${serviceId}`}>
          <button className="mt-4 w-full cursor-pointer bg-[#A47C55] hover:bg-[#8B5E3B] text-white font-medium py-2 rounded-xl transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServiceCard;
