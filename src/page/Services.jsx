import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PopularServiceCard from '../components/homeLayout/PopularServiceCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const services = useLoaderData(); 
  const [displayServices, setDisplayServices] = useState(services);
  const [sortOrder, setSortOrder] = useState('filter'); 
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in-out",
      once: false,   
      mirror: true,  
    });
  }, []);

  // Sorting function
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    if(order === 'filter') {
      // only filtered data 
      setDisplayServices(
        filterCategory === 'All'
          ? services
          : services.filter(service => service.category === filterCategory)
      );
      return;
    }

    const sorted = [...displayServices].sort((a, b) => {
      if(order === 'asc') return a.price - b.price;
      else return b.price - a.price;
    });

    setDisplayServices(sorted);
  };

  // Filtering function
  const handleFilterChange = (e) => {
    const category = e.target.value;
    setFilterCategory(category);

    const filtered = category === 'All'
      ? services
      : services.filter(service => service.category === category);

    // Sorting apply then combined effect work
    if(sortOrder === 'asc') filtered.sort((a, b) => a.price - b.price);
    else if(sortOrder === 'desc') filtered.sort((a, b) => b.price - a.price);

    setDisplayServices(filtered);
  };

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#5B3A1A] mb-6">
        Popular Winter Care Services
      </h2>

      {/* Sorting & Filtering Controls */}
      <div className="flex justify-between items-center gap-4 mb-8 flex-wrap">
        {/* Filter */}
        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select value={filterCategory} onChange={handleFilterChange} className="border rounded px-2 py-1">
            <option value="All">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Grooming">Grooming</option>
            <option value="Comfort">Comfort</option>
            <option value="Health">Health</option>
            <option value="Diet">Diet</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select value={sortOrder} onChange={handleSortChange} className="border rounded px-2 py-1">
            <option value="filter">Filter</option> 
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-16">
        {displayServices.map((service, index) => (
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
