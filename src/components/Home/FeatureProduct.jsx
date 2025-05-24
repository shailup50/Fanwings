"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

import productimg1 from "../../assets/products/CompactFan.webp";
import productimg2 from "../../assets/products/ShadedPoleMotor.webp";
import productimg3 from "../../assets/products/ExternalAxialFan.webp";
import productimg4 from "../../assets/products/IneternalAxial.webp";
import BusFan from "../../assets/products/Buses.webp";
import BusBlower from "../../assets/products/BusBlower.webp";
import InlineFan from "../../assets/home/Inline-Fan.webp";
import BoxType from "../../assets/products/BoxType.webp";
import TrainMotor from "../../assets/products/Railways.webp";
import BackwardAxial from "../../assets/products/BackwardCentrifugal.webp";
import ForwardCurveFan from "../../assets/home/ForwardCurveFan.webp";
import ForwardDual from "../../assets/products/ForwardDual.webp";
import ForwardSingle from "../../assets/products/ForwardSingle.webp";
import ECBLDCMotor from "../../assets/products/ECBLDCMotor.webp";
import icon from "../../assets/Industries/Fanwings_icon.svg";
import bgcontact from "../../assets/home/bg-product.webp";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Feature = () => {
  const products = [
    {
      title: "Compact Fan",
      images: productimg1,
      specs: [
        "Compact Fans - AC/ DC / EC",
        "Voltage: 12,24,48,115,230,415 V",
        "Size: 20x20 mm to 280x280 mm",
        "Application: UPS, Inverters, Electric Vehicles & Chargers",
      ],
    },
    {
      title: "Shaded Pole Motor",
      images: productimg2,
      specs: [
        "Shaded Pole Motors - Q Type, C Frame",
        "Elevator Cabin fans",
        "EC Motors",
        "Voltage: 115, 230V",
        "Range: 5W to 34W",
        "Application: Water coolers, Visi coolers, Elevators",
      ],
    },
    {
      title: "Axial Fan",
      images: productimg3,
      specs: [
        "Large Axial Fans – Suction/Blow",
        "Voltage: 115,230,415VAC",
        "Size: 200 to 910 mm",
        "Application: Commercial refrigeration, Chiller , Cold Room",
      ],
    },
    {
      title: "Backward Curved Centrifugal Fan",
      images: BackwardAxial,
      specs: [
        "Designed with blades that curve opposite to the direction of rotation.",
        "Known for high efficiency and low noise operation.",
        "Ideal for medium to high-pressure applications like HVAC systems.",
        "Application: Data center, AHU, FFU",
        "Self-cleaning design reduces dust buildup on blades.",
        "Offer stable airflow and reduced risk of overloading the motor.",
        "Commonly used in air handling units, clean rooms, and industrial ventilation.",
      ],
    },
    {
      title: "Forward Curved Centrifugal",
      images: ForwardCurveFan,
      specs: [
        "Single-phase:  220V / 240V",
        "Three-phase:  380V / 400V",
        "Frequency: 50 Hz / 60 Hz",
        "Motor Power Range: 0.05 kW to 15 kW Wheel",
        "Width: 75 mm to 500+ mm (3” to 20”+)",
      ],
    },
    {
      title: "Buses : Fan and Blower",
      images: BusMotor,
      specs: [
        "Compact and space-saving.",
        "Low power consumption",
        "Quiet and smooth operation",
        "Quick cabin cooling.",
      ],
    },
    {
      title: "Box Type Fan",
      images: BoxType,
      specs: [
        "Commonly used in refrigeration and ventilation systems.",
        "Protects internal components from dust, debris, and damage.",
        "Offers efficient cooling in confined or targeted areas.",
        "Easy to install and maintain",
        "Suitable for industrial and commercial use.",
      ],
    },

    // {
    //   title: "Motor: AC, EC, DC",
    //   images: Motor,
    //   specs: [
    //     "Voltage Range	6V – 48V (common); up to 400V (industrial)",
    //     "Power Output	1W – several kW",
    //     "Speed	1000–5000 RPM",
    //     "Control	Voltage variation (manual or PWM)",
    //     "Centrifugal Blowers – Single/ Dual Inlet",
    //     "Efficiency	70–85%",
    //   ],
    // },

    {
      title: "Railways : Fan and Blower",
      images: TrainMotor,
      specs: [
        "Built for long-lasting performance",
        "Delivers steady and strong airflow.",
        "Withstands high vibrations.",
        "Protected against overheating.",
      ],
    },
    {
      title: "Inline Fans",
      images: InlineFan,
      specs: [
        "Designed to fit within ductwork,.",
        "Offering efficient airflow without taking up extra space",
        "Commonly used in HVAC systems for ventilation, air extraction, and cooling applications.",
        "Provide consistent airflow and aretypes",
        "Quieter compared to other fan ",
        "Suitable for long duct runs",
      ],
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="py-0 -mt-8 md:mt-0 md:py-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-end md:justify-between flex-wrap items-center mb-6">
          <div>
            <p className="text-[#E2000F] tracking-wide mb-2">
              Featured Products
            </p>
            <h2 className="text-2xl md:text-3xl text-black font-medium leading-relaxed mb-6">
              Lorem Ipsum Is Simply Dummy Text Of The <br />
              Printing And Typesetting Industry.
            </h2>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              ref={prevRef}
              className={`p-2 rounded-full ${
                isBeginning ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
              } text-white`}
              disabled={isBeginning}
            >
              <GoChevronLeft className="text-xl" />
            </button>
            <button
              ref={nextRef}
              className={`p-2 rounded-full ${
                isEnd ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
              } text-white`}
              disabled={isEnd}
            >
              <GoChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="   h-full flex flex-col">
                <div className="flex border-2 border-[#1D40A2] rounded-3xl p-4 py-8 mb-8 justify-center items-center gap-2  h-full">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="h-[160px] object-contain"
                  />
                </div>
                <h3 className="text-[22px] text-black font-medium mb-2">
                  {item.title}
                </h3>
                <ul className="text-sm md:text-[15px]  space-y-1 mb-4">
                  {item.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start font-light mb-2 gap-2"
                    >
                      <span className="text-[#052B98] mt-1">
                        <IoMdSettings />
                      </span>{" "}
                      {spec}
                    </li>
                  ))}
                </ul>
                {/* <button className="text-[#1FA54D] font-medium flex items-center gap-4 hover:underline">
                                    Know More <IoArrowForwardCircleSharp className="text-2xl" />
                                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export const Product = () => {
  const productData = [
    {
      title: "Axial Fan",
      subcontent: [
        {
          Subcontenttitle: "Internal Rotor(AC, EC, DC)",
          Subcontentspec: [
            "Voltage:  115, 230, 415V",
            "Size: 133mm~400mm",
            "Applications: Railways, Metro, RRTS.",
          ],
        },
        {
          Subcontenttitle: "External Rotor (AC,EC)",
          Subcontentspec: [
            "Voltage:12,24,48,115,230,415V",
            "Size: 200mm-910mm",
            "Applications: Cold room, Condensing unit,Refrigeration, Ventilation etc. ",
          ],
        },
      ],
      image: productimg3,
      image2: true,

      imageTwo: productimg4,
    },
    {
      title: "Backward Curved Centrifugal Fan",
      specs: [
        "AC/EC/DC",
        "Voltage: 12,24,48,115, 230,415V",
        "Size:133mm~630mm",
        "Applications: Data center, AHU,Panel airconditioner, Telecom",
      ],
      image: BackwardAxial,
    },
    {
      title: "Forward Curved Centrifugal",
      image: ForwardSingle,
      image2: true,
      imageTwo: ForwardDual,
      subcontent: [
        {
          Subcontenttitle: "Single Inlet (AC/EC)",
          Subcontentspec: [
            "Voltage: 230,415V",
            "Size:120mm~280mm",
            "Applications: Airconditioners, Control panel, Force cooling applications etc.",
          ],
        },
        {
          Subcontenttitle: " Dual Inlet (AC/EC)",
          Subcontentspec: [
            "Voltage: 230,415V",
            "Size:120mm~400mm",
            "Applications: Airconditioners, Control panel, Railways,  Force cooling etc",
          ],
        },
      ],
    },
    {
      title: "Compact Fan",
      specs: [
        "AC/EC/DC",
        "Voltage: 12,24,48,115, 230,415V",
        "Size:20mm~280mm",
        "Applications: UPS, Inverters, Electric Vehicles & chargers etc.",
      ],
      image: productimg1,
    },
    {
      title: "Box Type Fan",
      specs: ["For domestic Refrigerators"],
      image: BoxType,
    },
    {
      title: "Shaded Pole Motor",
      specs: [
        "AC/EC",
        "Voltage: 230V",
        "Size: 5W, 10W, 16W, 18W, 25W,34W",
        "Applications: Visi coolers, Condensing unit, Wine Coolers etc.",
      ],
      image: productimg2,
    },
    {
      title: "EC/BLDC Motor",
      specs: [
        "AC/EC/DC",
        "Voltage:  230, 330, 415V",
        "Size:250mm~3200mm",
        "Applications: Railways, VRV, Chillers, Heat Pump.",
      ],
      image: ECBLDCMotor,
    },

    {
      title: "Buses",
      image: BusBlower,
      image2: true,
      imageTwo: BusFan,
      subcontent: [
        {
          Subcontenttitle: "Bus Blowers (DC)",
          Subcontentspec: [
            "Voltage: 12,24V",
            "Size: 97mm,100mm etc",
            "Applications: Buses, BTMS, Truck refrigerator, Radiator cooling, EV tractors ",
          ],
        },
        {
          Subcontenttitle: "Bus Fan (DC)",
          Subcontentspec: [
            "Voltage:  12, 24V",
            "Size: 200mm~385mm",
            "Applications: Buses, BTMS, Truck refrigerator, Radiator cooling, EV tractors ",
          ],
        },
      ],
    },
    {
      title: "Railways",
      subcontent: [
        {
          Subcontenttitle: "Fans",
          Subcontentspec: [
            "Voltage:  115, 230, 415V",
            "Size: 133mm~400mm",
            "Applications: Railways, Metro, RRTS.",
          ],
        },
        {
          Subcontenttitle: "Blower",
          Subcontentspec: [
            "Voltage:  115, 230, 415V",
            "Size: 500mm~630mm",
            "Applications: Railways, Metro, RRTS.",
          ],
        },
      ],
      image: TrainMotor,
      image2: false,
    },
    {
      title: "Inline Fans",
      specs: [
        "AC/EC",
        "Voltage:   230, 415V",
        "Size: 100mm~315mm",
        "Applications : basement ventilation, toilet exhaust etc.",
      ],
      image: InlineFan,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative text-black h-[800px] md:h-full">
      <div className="grid grid-cols-1 items-center gap-4 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ← ADD THIS
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="w-full"
        >
          {productData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`grid grid-cols-1  lg:grid-cols-12 items-center gap-2 mt-5 md:mt-0 ${
                  item.subcontent ? "mb-[3rem]" : "mb-1"
                }`}
              >
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-4 order-2 lg:order-1 md:w-[88%]">
                  <div className="md:order-1 order-2 flex items-center gap-5 mb-2 font-light">
                    <img src={icon} alt="icon" height={35} width={35} />
                    <span>Product Series</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-normal ">
                    {item.title}
                  </h2>
                  {item.subcontent ? (
                    <div
                      className={`${
                        !item.image2
                          ? "flex md:flex-row flex-col md:gap-1 gap-4"
                          : "space-y-4"
                      }`}
                    >
                      {item.subcontent.map((sub, i) => (
                        <div
                          key={i}
                          className={`${
                            !item.image2 ? "w-full md:w-1/2" : "w-full"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="text-[#052B98] mt-1 text-xl">
                              <FaArrowAltCircleRight />
                            </span>
                            <h2 className="text-xl px-2 md:text-2xl font-normal py-2">
                              {sub.Subcontenttitle}
                            </h2>
                          </div>

                          <ul className="text-sm md:text-[14px] space-y-1 mb-2">
                            {sub.Subcontentspec?.map((spec, j) => (
                              <li
                                key={j}
                                className="flex items-start font-light mb-2 gap-2"
                              >
                                <span className="text-[#052B98] mt-1">
                                  <IoMdSettings />
                                </span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="text-sm md:text-[15px] space-y-1 mb-2">
                      {item.specs?.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-start font-light mb-2 gap-2"
                        >
                          <span className="text-[#052B98] mt-1">
                            <IoMdSettings />
                          </span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-3 pt-1">
                    {item.buttons?.map((btn, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 font-normal text-sm flex items-center gap-1 text-white transition"
                      >
                        <IoMdArrowDropright className="text-lg" />
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-3 order-2 ">
                  <div className="flex md:flex-row flex-col justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full ${
                        item.image2
                          ? " h-[150px] md:max-h-[300px]"
                          : "max-h-[400px] "
                      } object-contain`}
                    />
                    {item.image2 ? (
                      <img
                        src={item.imageTwo}
                        alt={item.title}
                        className="w-full h-[150px] md:max-h-[300px] object-contain"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex absolute left-[35%] md:left-32 bottom-7  gap-3 z-10">
          <button
            ref={prevRef}
            className={`p-2 rounded-full ${
              isBeginning ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
            } text-white`}
            disabled={isBeginning}
          >
            <GoChevronLeft className="text-xl" />
          </button>
          <button
            ref={nextRef}
            className={`p-2 rounded-full ${
              isEnd ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
            } text-white`}
            disabled={isEnd}
          >
            <GoChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
