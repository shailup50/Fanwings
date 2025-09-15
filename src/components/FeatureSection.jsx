import React from "react";
import { motion } from "framer-motion";

const FeatureSection = ({ title, description, features }) => {
    return (
        <section className="bg-gray-100 py-10 md:py-14 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title with lines */}
                <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="hidden md:block w-24 h-[1px] bg-black relative">
                        <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 border border-black rounded-full bg-white"></span>
                    </div>

                    <h2 className="text-2xl md:text-3xl text-center font-medium text-black">
                        {title}
                    </h2>

                    <div className="hidden md:block w-24 h-[1px] bg-black relative">
                        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 border border-black rounded-full bg-white"></span>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    className="mt-6 text-gray-800 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: description }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                />

                {/* Key Features */}
                <motion.h3
                    className="text-lg md:text-xl font-medium mb-6 mt-8 md:mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    Key Features
                </motion.h3>

                {/* Features */}
                <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-0">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.5 + index * 0.2,
                                duration: 0.5,
                                type: "spring",
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {/* Feature Box */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#052B98] text-white px-5 py-4 rounded-lg text-sm md:text-base font-medium"
                            >
                                {feature}
                            </motion.div>

                            {/* Connector Line */}
                            {index !== features.length - 1 && (
                                <div className="hidden md:block w-4 h-[4px] bg-[#052B98]"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
