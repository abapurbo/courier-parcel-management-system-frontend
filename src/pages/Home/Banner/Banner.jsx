import React, { useEffect } from "react";
import Lottie from "react-lottie";
import deliveyGuy from "../../../assets/lottie/delivery-guy.json";

export default function Banner() {

  // Correct react-lottie options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: deliveyGuy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative bg-gradient-to-br  from-[#FFF7F1] via-[#FFF1E6] to-[#FFE8D6] text-gray-800 font-display min-h-screen flex flex-col overflow-hidden">

    
      {/* Hero Section */}
      <header className="relative flex-grow flex items-center justify-center pt-16 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center mx-auto">

          {/* Text Content */}
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              A trusted provider of
              <span className="text-[#f66f08] block ">
                courier services.
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
              We deliver your products safely to your home in a reasonable time.
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#f66f08] hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 group"
              >
                Get started
                <span className="material-icons-round group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="relative flex justify-center  mt-12 w-[600px]  md:mt-0">
            <div className="relative w-full ">
              <div className="absolute inset-0 bg-yellow-200/60 rounded-full scale-90 blur-2xl opacity-60 animate-pulse"></div>

              <Lottie
                options={lottieOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
