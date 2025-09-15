import React from 'react'
import { motion } from "framer-motion";

export const GrayInfo = ({ title, subtitle, description }) => {
    return (
        <>
            <section className="bg-gray-100 py-10 md:py-14 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Title Box */}
                    <motion.div
                        className="bg-[#052B98] text-white rounded-3xl px-6 py-6 inline-block relative mb-6 md:w-[60%]"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="flex items-center justify-center gap-4">
                            {/* Left Line */}
                            <div className="hidden md:block w-24 h-[1px] bg-white relative">
                                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                            </div>

                            {/* Title + Subtitle */}
                            <div>
                                <h2 className="text-2xl md:text-3xl text-white uppercase font-medium">
                                    {title}
                                </h2>
                                <p className="text-2xl md:text-3xl text-white uppercase font-medium">
                                    {subtitle}
                                </p>
                            </div>

                            {/* Right Line */}
                            <div className="hidden md:block w-24 h-[1px] bg-white relative">
                                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        className="mt-6 text-gray-800 text-sm md:text-base leading-relaxed md:w-[60%] mx-auto"
                        dangerouslySetInnerHTML={{ __html: description }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                </div>
            </section>
        </>
    )
}
