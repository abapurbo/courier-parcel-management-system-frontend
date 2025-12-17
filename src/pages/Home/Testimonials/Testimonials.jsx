import React, { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    const inter = document.createElement("link");
    inter.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    inter.rel = "stylesheet";

    const icons = document.createElement("link");
    icons.href = "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    icons.rel = "stylesheet";

    document.head.appendChild(inter);
    document.head.appendChild(icons);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background-light font-display">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-yellow-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
      

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 ">
          Our Trusted Clients
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-16 leading-relaxed">
          Our mission is to drive progress and enhance the lives of our customers by delivering superior courier services that exceed expectations every single time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              quote:
                "Safe space for open talks about our logistics needs. The resources provided helped us streamline our entire delivery process effortlessly. Truly a game changer for our local distribution.",
              name: "Sarah Jenkins",
              role: "Logistics Manager",
            },
            {
              quote:
                "Your express shipping saved me during the holiday rush. Talked to support who understood the urgency immediately. The package arrived even earlier than expected.",
              name: "Darlene Robertson",
              role: "E-commerce Owner",
            },
            {
              quote:
                "Easy interface perfect for beginners! Tracking packages kept me engaged and felt mentally sharp & connected to where my valuable goods were at all times.",
              name: "Maria Sanchez",
              role: "Senior Operations Lead",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl  hover:shadow-lg transition-shadow duration-300 border border-primary flex flex-col h-full group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[#f66f08] flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-outlined text-white text-2xl">format_quote</span>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed flex-grow">“{item.quote}”</p>

              <div className="mt-auto border-t border-gray-100 pt-6">
                <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
