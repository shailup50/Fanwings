import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/mobility/banner.webp"
import { Advantage } from '../../../components/Mobility/Advantage'
import icon1 from "../../../assets/mobility/icon1.svg"
import icon2 from "../../../assets/mobility/icon2.svg"
import icon3 from "../../../assets/mobility/icon3.svg"
import adimg from "../../../assets/mobility/adimg.webp"
import TechnologySection from '../../../components/Mobility/TechnologySection'
import AppInfo from '../../../components/Mobility/AppInfo'
import info1 from "../../../assets/mobility/application.webp"
import { FaCheck } from "react-icons/fa6";
import key1 from "../../../assets/mobility/key1.svg"
import key2 from "../../../assets/mobility/key2.svg"
import key3 from "../../../assets/mobility/key3.svg"
import key4 from "../../../assets/mobility/key4.svg"
import key5 from "../../../assets/mobility/key5.svg"
import buspdf from "../../../assets/mobility/Bus.pdf"
import railwaypdf from "../../../assets/mobility/Railways.pdf"

import { motion } from "framer-motion";




function MobilityFans() {
  const banner = {
    title: "Mobility Fans",
    info: `Mobility fans are specially designed to provide efficient airflow in confined or dynamic environments where
    space, performance, and durability are critical. <br><br> These compact and lightweight fans are ideal for applications in mobile systems, transportation, and medical equipment, where consistent cooling and ventilation are
    essential for safe and reliable operation.`,
    button1: "Bus",
    // link1: "#",
    button2: "Railway",
    // link2: "#",
    img: Banner,
    targetvalue: false
  }
  const advantages = [
    {
      icon: icon1,
      title: "Compact & Lightweight Design",
      description:
        "Perfectly suited for portable & space-constrained applications such as mobility aids and medical devices.",
    },
    {
      icon: icon2,
      title: "Efficient Cooling Performance",
      description:
        "Delivers reliable airflow to maintain optimal operating temperatures in dynamic and sensitive environments.",
    },
    {
      icon: icon3,
      title: "Low Noise & Vibration",
      description:
        "Engineered with precision-balanced components and noise-reduction features to ensure smooth and quiet operation—ideal for user-centric applications.",
    },
  ];
  const techData = {
    title: "TECHNOLOGY",
    subtitle: "Backward-Curved Blades – Plug Fan",
    features: [
      {
        title: "High Static Pressure Performance",
        description:
          "Effectively overcomes resistance in enclosed or spiral duct systems.",
      },
      {
        title: "Energy-Efficient EC Motor Options",
        description:
          "Offers precise speed control, extended service life, and minimal power consumption.",
      },
      {
        title: "Reliable & Versatile",
        description:
          "Suitable for mobility aids, diagnostic equipment, ventilation in transport cases, and other compact systems.",
      },
    ],
  };

  const info = `
  Mobility fans are designed to deliver powerful, efficient airflow in compact, portable systems. Engineered for
performance, durability, and low-noise operation, these fans are ideal for vehicles and equipment where
reliability
and vibration resistance are crucial.
   <br><br>
   With robust construction and energy-efficient motors, mobility fans ensure
   optimal cooling and ventilation in the most demanding mobile environments.
  `;
  const applications = [
    {
      title: "Buses & coaches (engine cooling, cabin ventilation) ",

    },
    {
      title: "Railways and metro systems",
    },
    {
      title: "Mobile medical units & laboratories",
    },
    {
      title: "Truck refrigeration",
    },
  ];


  const features = [
    {
      icon: key1,
      text: "High resistance to vibration and shock",
    },
    {
      icon: key2,
      text: "Compact and lightweight design",
    },
    {
      icon: key3,
      text: "Long operating life with minimal maintenance",
    },
    {
      icon: key4,
      text: "Available in Brush DC, BLDC and EC",
    },
    {
      icon: key5,
      text: "Custom mounting and stepless speed control",
    },
  ];

  return (
    <>
      <InnerPageBanner data={banner} />
      <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16">
        <Advantage heading="Advantages" banner={adimg} data={advantages} />
      </section>
      <section>
        <TechnologySection
          title={techData.title}
          subtitle={techData.subtitle}
          features={techData.features}
        />
      </section>
      <section>
        <AppInfo title={`Applications`} description={info} image={info1} />
      </section>

      <section className="py-4 md:py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-black mb-10 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            KEY APPLICATIONS
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-14 md:gap-14 md:w-[95%] mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="border-3 md:border-4 border-[#22A046] rounded-3xl md:rounded-4xl px-3 md:px-6 py-10 md:pt-16 relative flex flex-col items-center text-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              >
                <div className="absolute -top-6 md:-top-8 bg-[#22A046] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white text-lg md:text-3xl shadow-md">
                  <FaCheck />
                </div>

                <p className="text-black font-normal text-base md:text-lg leading-tight">
                  {app.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="bg-[#012A8D] py-12 px-4 md:px-8 lg:px-16 rounded-3xl text-white max-w-7xl mx-auto mt-10 mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-medium text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          KEY FEATURES
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center1 vertical_line gap-8 md:gap-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex md:flex-col items-center text-center relative md:gap-0 gap-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 md:p-6 rounded-full text-[#012A8D] z-10 max-w-16 max-h-16 md:max-w-24 md:max-h-24 flex items-center justify-center shadow-lg">
                <img src={item.icon} alt={item.text} />
              </div>
              <p className="text-[15px] text-left md:text-center md:text-base font-light md:mt-6 md:max-w-[160px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </>
  )
}

export default MobilityFans