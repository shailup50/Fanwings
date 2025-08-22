import React from 'react';
import { motion } from "framer-motion";

const AppInfo = ({ title, description, image }) => {
    return (
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 items-center1 flex-col-reverse md:flex-row">

                {/* Left Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h2
                        className="text-2xl md:text-3xl text-black uppercase font-medium mb-4 md:mb-8 md:mt-6"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <p
                        className="text-black text-sm md:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default AppInfo;