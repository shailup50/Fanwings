import React, { useRef, useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// import banner from "../../assets/home/banner.webp";
import banner from "../../assets/home/fanwings-banner.webp";
import slider1 from "../../assets/Industries/FanCoilUnit.webp";
import slider2 from "../../assets/Industries/AircooledChillers.webp";
import slider3 from "../../assets/Industries/PackageUnit.webp";
import slider4 from "../../assets/Industries/AirHandlingUnit.webp";
import slider5 from "../../assets/Industries/FanFilterUnit.webp";
import slider6 from "../../assets/Industries/ColdRoom.webp";
import slider7 from "../../assets/Industries/Adiabatic.webp";
import slider8 from "../../assets/Industries/Renewables.webp";
import slider9 from "../../assets/Industries/EVChargers.webp";
import slider10 from "../../assets/Industries/UPSInverter.webp";
import slider11 from "../../assets/Industries/MobilityHVAC.webp";
import bgslider from "../../assets/home/bg-slider.webp";

export const Banner = () => {
  const heroData = {
    hero: {
      heading: ["Crafted by Aerodynamics. Powered by Technology"],
      description: "With cutting-edge technology and a commitment to quality.",
      buttonText: "Know More",
    },
    about: {
      tag: "About Fanwings",
      title: "Driving the Future of Airflow Innovation",
      description: `Fanwings Airengineers Pvt. Ltd. is a high-tech enterprise located in Tapukara, Rajasthan. The company is based on advanced production equipment and technology, focusing on the research and development, production, and sales of AC/EC high-efficiency energy-saving external rotor fans. <br/>
                 The company specializes in producing a series of products such as axial flow fans, forward tilt single/double inlet centrifugal fans, and backward tilt centrifugal fans, which are characterized by high efficiency, energy conservation, and environmental protection. They are widely used in the HVAC industry, data centers, negative pressure wards, energy storage industry, cold chain, new energy and other fields. With advanced production processes and strict quality control systems, the company's products have successively passed CCC, CE, and ROHS certifications, providing reliable product guarantees for global customers, comprehensively deepening strategic cooperation, and working together to achieve mutual benefit and win-win results.`,
      readMore: "Read More",
    },
  };

  const { hero, about } = heroData;
  return (
    <>
      <div>
        <section
          className=" relative text-white bg-no-repeat bg-cover bg-bottom py-24 pt-14 md:pt-20 md:py-20"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="max-w-7xl mx-auto px-6 md:py-10 md:pb-28 grid md:grid-cols-5 items-center z-10 relative">
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-3xl md:text-5xl font-medium leading-snug mb-6">
                {hero.heading.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h1>
              <p className="mb-10 text-base font-light text-white opacity-80 md:text-lg">
                {hero.description}
              </p>
              {/* <button className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-6 md:px-10 rounded-full flex items-center gap-4 hover:text-[#1FA54D]">
                                {hero.buttonText}
                                <BsArrowRightCircle className='text-xl' />

                            </button> */}
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                        <svg
                            className="relative block w-[calc(100%+1.3px)] h-[100px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39 56.36C213.18 96.71 109.74 111.75 0 103.33V0h1200v103.33c-110.71 8.42-221.39-9.71-331.15-31.94C747.74 49.86 642.08 19.99 531.45 25.73c-109.42 5.67-218.39 50.89-321.39 30.63z"
                                fill="#fff"
                            ></path>
                        </svg>
                    </div> */}
        </section>

        <section className="bg-white py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <p className="text-[#E2000F] tracking-wide mb-2">{about.tag}</p>
            <h2 className="text-2xl md:text-3xl text-[#052B98] font-medium leading-9 md:leading-11  mb-6">
              {about.title}
            </h2>
            <div className="w-full h-[2px] bg-[#1FA54D] relative">
              <span className="absolute -bottom-[6px] right-0 h-3 w-3 rounded-full bg-[#1FA54D]"></span>
            </div>
          </div>
          <div className="md:col-span-7 ">
            <p
              className="text-black opacity-80 text-base md:text-[17px] font-light mb-8"
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
            {/* <button className="text-[#1FA54D] font-medium flex items-center gap-4 hover:underline">
                            {about.readMore}
                            <BsArrowRightCircleFill className="text-lg" />
                        </button> */}
          </div>
        </section>
      </div>
    </>
  );
};

export const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  const sliderData = [
    {
      title: "Fan Coil Unit (FCU)",
      subtitle: "Industry And Applications",
      description:
        "It's a simple, compact unit that uses a coil and a fan to condition air and is commonly found in hotels, offices, hospitals, and residential buildings",
      image: slider1,
      btnText: "Know More",
    },
    {
      title: "Air cooled Chillers",
      subtitle: "Industry And Applications",
      description:
        "•Air-Cooled Chillers are a type of refrigeration system commonly used for cooling large buildings, industrial processes, or equipment.",
      image: slider2,
      btnText: "Know More",
    },
    {
      title: "Packaged Unit/Ductable Split",
      subtitle: "Industry And Applications",
      description:
        "•A Package Unit Air Conditioner (also called a Packaged Air Conditioning Unit) is a self-contained HVAC system that combines all components—compressor, condenser, evaporator, and expansion device—into a single housing.",
      image: slider3,
      btnText: "Know More",
    },
    {
      title: "Air Handling Unit (AHU)",
      subtitle: "Industry And Applications",
      description:
        "•An AHU (Air Handling Unit) is a key component of an HVAC (Heating, Ventilation, and Air Conditioning) system. Its main function is to circulate, filter, and condition air within a building. It does not generate cooling or heating on its own—it works in coordination with chillers, boilers, or direct expansion (DX) systems.",
      image: slider4,
      btnText: "Know More",
    },
    {
      title: "Fan Filter Unit (FFU)",
      subtitle: "Industry And Applications",
      description:
        "•An FFU is a self-contained air filtration module that combines a fan and a HEPA or ULPA filter in one unit. It is used to supply clean, filtered air to controlled environments such as cleanrooms, labs, or sensitive manufacturing areas (e.g., semiconductor or pharmaceutical production).",
      image: slider5,
      btnText: "Know More",
    },
    {
      title: "Cold Room",
      subtitle: "Industry And Applications",
      description:
        "A cold room is a refrigerated storage area maintained at a specific low temperature, typically between -30°C and +10°C, used to preserve perishable items such as food, pharmaceuticals, and biological samples.",
      image: slider6,
      btnText: "Know More",
    },
    {
      title: "Adiabatic Cooler/Cooling Tower",
      subtitle: "Industry And Applications",
      description:
        "Adiabatic cooling is a natural cooling process in which air temperature is reduced without adding or removing heat, by reducing the air pressure, or more commonly in HVAC, by evaporating water into the air. It’s a key principle in evaporative cooling systems.A Cooling Tower is a heat rejection device that removes unwanted heat from a building or industrial process by cooling a water stream through evaporative cooling.<br/> It’s most commonly used in large HVAC systems and industrial facilities where chillers or processes produce excess heat.",
      image: slider7, //image-change
      btnText: "Know More",
    },
    {
      title: "Renewables",
      subtitle: "Industry And Applications",
      description: `Renewables, or renewable energy sources, refer to energy derived from natural processes that are continuously replenished. These sources are key to building a sustainable energy future and reducing greenhouse gas emissions.`,
      image: slider8,
      btnText: "Know More",
    },
    {
      title: "EV Chargers & Battery Storage",
      subtitle: "Industry And Applications",
      description:
        "EV chargers supply electricity to recharge electric vehicles (EVs). For an industrial setting like a fan manufacturing plant, they serve both operational and employee/fleet purposes.<br/>Battery storage systems store electrical energy for later use. For an industrial fan plant, these systems help manage energy demand, ensure backup power, and enable integration with renewable sources like solar.",
      image: slider9,
      btnText: "Know More",
    },
    {
      title: "UPS/Inverter",
      subtitle: "Industry And Applications",
      description:
        "A UPS is a device that provides instantaneous backup power when the main power source fails. It bridges the gap between a power outage and the startup of a generator or transfer to battery systems.<br/>An Inverters are used to control the speed of fan motors by adjusting the frequency and voltage of the power supplied.",
      image: slider10, //image change
      btnText: "Know More",
    },
    {
      title: "Mobility - HVAC",
      subtitle: "Industry And Applications",
      description: `Mobility HVAC refers to Heating, Ventilation, and Air Conditioning systems used in mobile applications, such as:<br/>
•Vehicles (cars, buses, trucks)<br/>
•Trains<br/>
•Aircraft<br/>
•Ships<br/>`,
      image: slider11,
      btnText: "Know More",
    },
  ];
  return (
    <>
      <section className="relative ">
        <div
          className="absolute h-[75%] top-[52%] -translate-y-2/4 left-0 w-full bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${bgslider})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".custom-pagination4",
              clickable: true,
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center text-white  relative">
                  <div className="py-12 pb-40 md:py-24  w-full md:w-1/2 order-2 md:order-1">
                    <h4 className="text-sm mb-4 -mt-8 md:mt-0">
                      {item.subtitle}
                    </h4>
                    <h2 className="text-2xl md:text-3xl mb-4">{item.title}</h2>
                    <p
                      className="mb-6 md:mb-10 text-sm font-light md:text-base"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    <button className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-6 md:px-10 rounded-full flex items-center gap-4 hover:text-[#1FA54D]">
                      {item.btnText}
                      <BsArrowRightCircle className="text-xl" />
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 p-8 order-1 md:order-2">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Arrows */}
            <div className="flex justify-between items-center   style2_slider z-10">
              <div className="flex items-center middle_arrow gap-10 lg:gap-14">
                <button
                  className={`swiper-button-prev   order-1 rounded-full   !text-white  px-4 py-2 ${
                    isBeginning ? "opacity-100 cursor-not-allowed" : ""
                  }`}
                  disabled={isBeginning}
                ></button>
                <button
                  className={`swiper-button-next   order-3 rounded-full !text-white      px-4 py-2 ${
                    isEnd ? "opacity-100 cursor-not-allowed" : ""
                  }`}
                  disabled={isEnd}
                ></button>
                <div className="order-2">
                  <div className="custom-pagination4 white-pagination flex justify-start mb-3 space-x-2"></div>
                </div>
              </div>
            </div>

            {/* <div className=" bottom-10 left-10 z-50 flex gap-4">
                        <button ref={prevRef} className="text-white bg-[#2ecc71] p-3 rounded-full">
                            <FaArrowLeft />
                        </button>
                        <button ref={nextRef} className="text-white bg-[#2ecc71] p-3 rounded-full">
                            <FaArrowRight />
                        </button>
                    </div> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};
