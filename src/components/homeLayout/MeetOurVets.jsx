import React, { use } from "react";
import { FaStar } from "react-icons/fa";
const vetsPromise = fetch("/vets.json").then((res) => res.json());

const MeetOurVets = () => {
  const doctor = use(vetsPromise);

  return (
    <div className=" py-12">
      <h2 className="text-3xl font-bold text-center text-[#3B2F2F] mb-10">
        Meet Our Expert Vets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-6xl mx-auto">
        {doctor.map((vet) => (
          <div
            key={vet.id}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#EAD9C9]"
            />
            <h3 className="text-lg font-semibold text-[#3B2F2F] mb-2">
              {vet.name}
            </h3>
            <span className="text-xs text-black">{vet.email}</span>
            <div className="flex items-center text-[#D97706] mt-2">
              <FaStar fill="#D97706" size={18} />
              <span className="ml-2 font-medium">{vet.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
