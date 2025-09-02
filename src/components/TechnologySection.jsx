import React from 'react';
import { motion } from "framer-motion";

const TechnologySection = ({ title, items = [] }) => {
    return (
        <section className="bg-[#0033A0] text-white rounded-2xl px-6 md:px-12 py-10 md:py-14">
            {/* Title */}
            <motion.h2
                className="text-center text-2xl font-medium md:text-3xl mb-8 md:mb-12 uppercase"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-[95%] mx-auto">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-4 flex-wrap md:flex-nowrap group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Icon + Label */}
                        {item.icon && (
                            <div className="text-4xl text-white flex-wrap md:block flex gap-4 items-center">
                                <div className="md:min-w-16">
                                    <motion.img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-12 md:w-14 object-contain mb-2 md:mb-4"
                                        whileHover={{ rotate: 8, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </div>
                                <h3 className="text-lg mb-1 group-hover:text-gray-200 transition-colors duration-300">
                                    {item.label}
                                </h3>
                            </div>
                        )}

                        {/* Description */}
                        <div>
                            <p className="text-[15px] font-light text-white leading-relaxed md:w-[90%]">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechnologySection;
