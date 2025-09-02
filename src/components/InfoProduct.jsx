import React from 'react';
import { motion } from "framer-motion";

const InfoProduct = ({ title, description, image, subheading }) => {
    return (
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 items-center">

                {/* Left content */}
                <motion.div
                    className="w-full md:w-[60%]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h2
                        className="text-2xl md:text-3xl text-black uppercase font-medium mb-4 md:mb-8"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {subheading && (
                        <motion.h3
                            className="bg-[#1FA54D] mb-6 px-6 p-2 text-base md:text-lg text-white text-center  inline-block"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            {subheading}
                        </motion.h3>
                    )}
                    <p
                        className="text-black text-sm md:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </motion.div>

                {/* Right image */}
                <motion.div
                    className="w-full md:w-[40%]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default InfoProduct;
