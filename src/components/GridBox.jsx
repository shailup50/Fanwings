import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export const GridBox = ({ data }) => {
    if (!data) return null;
    return (
        <>

            <div className="max-w-7xl mx-auto text-center">
                {data.heading && (
                    <motion.h2
                        className="text-2xl md:text-3xl text-black uppercase font-medium mb-4 md:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        {data.heading}
                    </motion.h2>
                )}

                {data.greenBox && (
                    <motion.div
                        className="bg-[#1FA54D] text-white rounded-md p-6 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className="text-sm md:text-base font-normal leading-relaxed">
                            {data.greenBox}
                        </p>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
                    {data.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2, ease: "easeOut" }}
                            viewport={{ once: false }}
                        >
                            <div className="flex items-center mb-4 relative w-full justify-center h-full">
                                {((idx + 1) % 3 !== 0) && (
                                    <div className="hidden md:block absolute right-0 top-4 bottom-4">
                                        <div className="w-[1px] h-full border border-dashed border-[#1FA54D] relative -right-6">
                                            <span className="absolute -top-[6px] -right-[4px] h-2 w-2 rounded-full bg-[#1FA54D]"></span>
                                        </div>
                                    </div>
                                )}
                                <div className="border border-black p-4 shadow-sm w-full h-full text-center">
                                    <p className="text-[15px] md:text-base">{feature}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {data.footer && (
                    <motion.p
                        className="mt-12 text-black text-[15px] md:text-base max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        {data.footer}
                    </motion.p>
                )}
            </div>

        </>
    )
}

export const InfoSection = ({ title, itemsLeft = [], itemsRight = [] }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <>
            <section className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden">
                {/* Title */}
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-3xl text-center font-medium text-white mb-10"
                    >
                        {title}
                    </motion.h2>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    {/* Middle Divider */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l border-white"></div>

                    {/* Left Column */}
                    <div className="flex flex-col items-center md:items-end gap-12 pr-0 md:pr-8">
                        {itemsLeft.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-center max-w-sm"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={fadeUp}
                                custom={idx}
                            >
                                {item.icon && (
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="bg-white text-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-12 object-contain"
                                        />
                                    </motion.div>
                                )}
                                {item.heading && (
                                    <p className="text-lg md:text-xl font-medium text-white max-w-4xl mx-auto mt-4 mb-2">
                                        {item.heading}
                                    </p>
                                )}
                                <p className="text-sm md:text-base font-light">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-start gap-12 pl-0 md:pl-8 mt-12 md:mt-0">
                        {itemsRight.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-center max-w-sm"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={fadeUp}
                                custom={idx}
                            >
                                {item.icon && (
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="bg-white text-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </motion.div>
                                )}
                                {item.heading && (
                                    <p className="text-lg md:text-xl font-medium text-white max-w-4xl mx-auto mt-4 mb-2">
                                        {item.heading}
                                    </p>
                                )}
                                <p className="text-sm md:text-base font-light">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}



export const FanCard = ({ image, title, description, points }) => {
    return (
        <>
            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }} // 👈 triggers every time when scrolled into view
            >
                {/* Left Image */}
                <motion.div
                    className="flex-shrink-0 w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto rounded-2xl object-cover"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium mb-4 md:mb-8">
                        {title}
                    </h2>
                    <p
                        className="text-black mb-4"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <ul className="list-disc list-outside space-y-2 text-black ms-6">
                        {points.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: false }}
                            >
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </>
    )
}



export const BoxBenifits = ({
    title,
    description,
    title2,
    benefits,
    footer,
}) => {
    return (
        <>
            <motion.h2
                className="text-2xl md:text-3xl font-medium text-black mb-6"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {title}
            </motion.h2>

            {/* Description Box */}
            <motion.div
                className="bg-[#1FA54D] text-white rounded-md py-4 px-6 md:px-10 md:py-6 mb-10 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <p className="text-sm md:text-base leading-relaxed">{description}</p>
            </motion.div>

            {/* Subheading */}
            <motion.h3
                className="text-2xl font-medium mb-16 mt-12 text-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {title2}
            </motion.h3>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-10 md:w-[95%] mx-auto">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="border-2 md:border-4 border-[#22A046] rounded-3xl md:rounded-4xl px-3 md:px-6 py-10 md:pt-16 relative flex flex-col items-center text-center justify-center
                       transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                    >
                        {/* Check Icon */}
                        <div className="absolute -top-6 md:-top-8 bg-[#22A046] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white text-lg md:text-3xl shadow-md">
                            <FaCheck />
                        </div>

                        {/* Text */}
                        <p className="text-black font-normal text-base md:text-lg leading-tight">
                            {benefit}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            {footer && (
                <motion.p
                    className="text-black text-sm md:text-base max-w-4xl mx-auto mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {footer}
                </motion.p>
            )}
        </>
    )
}



export const ApplicationSection1 = ({ title, description, listTitle, listItems, image }) => {
    return (
        <>
            <section className="py-12 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Left Content */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        {title && (
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                        )}

                        {listTitle && (
                            <p className="font-semibold text-gray-900 mb-3">{listTitle}</p>
                        )}

                        {listItems && listItems.length > 0 && (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {listItems.map((item, index) => (
                                    <li key={index} className="leading-snug">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-md rounded-2xl object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
