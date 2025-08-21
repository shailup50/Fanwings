import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


export const InnerPageBanner = ({ data }) => {
    const { title, info, button1, link1, button2, link2, img, targetvalue } = data
    return (
        <>
            <section className="bg-[#F1F8FF] py-14 md:py-24 border-b-6 rounded-bl-3xl rounded-br-3xl border-[#1FA54D] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap md:flex-nowrap gap-10 items-center justify-between">

                        {/* Left Content */}
                        <motion.div
                            className="w-full md:w-[50%]"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-[#1B1E21] font-medium text-3xl uppercase mb-4 md:mb-6 md:text-4xl">
                                {title}
                            </h1>
                            <p
                                className="font-normal text-[15px] md:text-base"
                                dangerouslySetInnerHTML={{ __html: info }}
                            />

                            {/* Buttons */}
                            <div className="flex gap-4 md:gap-6 items-center mt-6 md:mt-10">
                                {button1 && (
                                    <Link
                                        to={link1}
                                        target={`${targetvalue ? "_blank" : "_self"}`}
                                        className="relative group bg-[#1FA54D] text-white py-3 md:py-4 px-3 text-[15px] md:text-base md:px-4 md:w-52 justify-center rounded-full flex items-center gap-2 md:gap-4 overflow-hidden transition-all duration-500"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {button1} <IoArrowForwardCircleOutline className="text-xl" />
                                        </span>
                                        {/* Cool hover shine effect */}
                                        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        <span className="absolute inset-0 bg-[#1FA54D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                    </Link>
                                )}

                                {button2 && (
                                    <Link
                                        to={link2}
                                        target={`${targetvalue ? "_blank" : "_self"}`}
                                        className="relative group bg-[#1FA54D] text-white py-3 md:py-4 px-3 text-[15px] md:text-base md:px-4 md:w-52 justify-center rounded-full flex items-center gap-2 md:gap-4 overflow-hidden transition-all duration-500"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {button2} <IoArrowForwardCircleOutline className="text-xl" />
                                        </span>
                                        {/* Hover Effects */}
                                        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        <span className="absolute inset-0 bg-[#1FA54D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="w-full md:w-[40%]"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <motion.img
                                src={img}
                                alt={title}

                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

