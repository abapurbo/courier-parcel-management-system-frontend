import React from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaWarehouse,
  FaBriefcase,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-18 px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-bold text-primary">
          How it Works
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          Our delivery process is simple, reliable, and fast. Whether it’s personal parcels or corporate shipments, we make sure your packages reach on time with complete transparency.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        
        {/* Card 1 */}
        <div className="group bg-card-light rounded-2xl p-8 shadow-xl border-[#f66f08] transition-all duration-300 transform hover:-translate-y-1 border">
          <div className="mb-6 inline-flex items-center justify-center relative">
            <FaTruck className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
            <FaMapMarkerAlt className="text-2xl text-primary absolute ml-6 -mt-6 bg-card-light rounded-full border-2 border-background-light" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Booking Pick & Drop
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-card-light rounded-2xl p-8 shadow-xl border-[#f66f08] transition-all duration-300 transform hover:-translate-y-1 border">
          <div className="mb-6 inline-flex items-center justify-center relative">
            <FaMoneyBillWave className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
            <FaCheckCircle className="text-2xl text-primary absolute -right-2 -top-2" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Cash On Delivery
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-card-light rounded-2xl p-8 shadow-xl border-[#f66f08] transition-all duration-300 transform hover:-translate-y-1 border">
          <div className="mb-6 inline-flex items-center justify-center">
            <FaWarehouse className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Delivery Hub
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-card-light rounded-2xl p-8 shadow-xl border-[#f66f08] transition-all duration-300 transform hover:-translate-y-1 border">
          <div className="mb-6 inline-flex items-center justify-center">
            <FaBriefcase className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Booking SME & Corporate
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
