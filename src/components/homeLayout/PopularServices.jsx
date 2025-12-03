import React, { useEffect } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularServices = () => {
  const services = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: "ease-in-out",
      once: false,   
      mirror: true,  
    });
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-[#5B3A1A] mb-10">
        Popular Winter Care Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-y-16">
        {services.slice(0, 6).map((service, index) => (
          <PopularServiceCard
            key={service.serviceId}
            service={service}
            delay={index * 10} 
          />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
