import React from 'react'
import { motion } from "framer-motion";

export const Advantage = ({ data, heading, banner }) => {

    return (
        <>
            <section className="bg-white">
                {/* Heading Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl text-black uppercase font-medium text-center md:text-left mb-10"
                >
                    {heading}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
                    {/* Image Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="w-full h-full"
                    >
                        <img
                            src={banner}
                            alt="Industrial Fan"
                            className="w-full max-w-xl mx-auto"
                        />
                    </motion.div>

                    {/* Content Box Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false }}
                        className="w-full bg-[#012A8D] text-white p-6 py-8 md:py-14 md:p-14 rounded-xl h-full relative"
                    >
                        <div className="h-[75%] w-3 md:w-4 bg-[#1FA54D] absolute -left-[6px] md:-left-2 top-2/4 -translate-y-1/2"></div>

                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                                viewport={{ once: false }}
                                className="flex items-start gap-6 md:gap-8 mb-8 md:mb-14 last:mb-0"
                            >
                                <img src={item.icon} alt={item.title} className="w-12 object-contain" />
                                <div>
                                    <h3 className="font-medium text-lg md:text-xl mb-3 uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-[15px] md:text-base font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
