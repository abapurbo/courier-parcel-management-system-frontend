import React from "react";

const ServiceSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-background-light text-white">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-primary sm:text-5xl mb-4">
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-500 ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Service 1 */}
        <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-hover border border-primary transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              local_shipping
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Express & Standard Delivery
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours.
          </p>
        </div>

        {/* Service 2 (Highlighted) */}
        <div className="group bg-card-highlight rounded-2xl p-8 shadow-xl border border-primary hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-white/50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              map
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Nationwide Delivery
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48-72 hours.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group bg-white rounded-2xl p-8 shadow-xl border border-primary hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              inventory_2
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Fulfillment Solution
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Customized service with inventory management, online order
            processing, packaging, and after sales support.
          </p>
        </div>

        {/* Service 4 */}
        <div className="group bg-white rounded-2xl p-8 shadow-xl border border-primary hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              payments
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Cash on Home Delivery
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            100% cash on delivery anywhere in Bangladesh with guaranteed product
            safety.
          </p>
        </div>

        {/* Service 5 */}
        <div className="group bg-white rounded-2xl p-8 shadow-xl  border border-primary hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              handshake
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Customized corporate services including warehouse and inventory
            management support.
          </p>
        </div>

        {/* Service 6 */}
        <div className="group bg-white rounded-2xl p-8 shadow-xl  border border-primary hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full">
          <div className="mb-6 inline-flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full">
            <span className="material-icons-outlined text-4xl text-primary">
              keyboard_return
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">
            Parcel Return
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Reverse logistics facility allowing customers to return or exchange
            products with online merchants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
