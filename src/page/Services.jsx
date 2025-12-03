import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import PopularServiceCard from '../components/homeLayout/PopularServiceCard';
import Aos from 'aos';



const Services = () => {
  const service = useLoaderData();

    useEffect(() => {
      Aos.init({
        duration: 500, 
        easing: "ease-in-out",
        once: false,   
        mirror: true,  
      });
    }, []);
    
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#5B3A1A] mb-10">
        Popular Winter Care Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-16">
        {service.map((service, index) => (
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

export default Services;
