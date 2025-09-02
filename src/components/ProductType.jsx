import React from "react";
import { motion } from "framer-motion";

export const ProductType = ({ products = [] }) => {
    const isSingle = products.length === 1;
    return (
        <>
            <div className={`grid gap-2 md:gap-14 ${isSingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-white p-6 md:gap-4 gap-3"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="min-w-[40%] mb-4 md:mb-0 bg-[#F1F8FF]">
                            <motion.img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto object-contain"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            />
                        </div>
                        <div className="min-w-[60%] md:pl-6 text-center md:text-left">
                            <div className="inline-block">
                                <h3 className="text-lg font-medium md:text-xl text-gray-800">{product.title}</h3>
                                <div className="w-full h-[2px] bg-[#1FA54D] relative mt-3 mb-5">
                                    <span className="absolute -bottom-[6px] right-0 h-3 w-3 rounded-full bg-[#1FA54D]"></span>
                                </div>
                            </div>
                            <p className="text-black text-[15px] md:text-base" dangerouslySetInnerHTML={{ __html: product.description }} />
                            {/* Example button with hover effect */}
                            {product.buttonText && product.buttonLink && (
                                <motion.a
                                    href={product.buttonLink}

                                    className="inline-block"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 250 }}
                                >
                                    <button className="mt-4 px-5 py-2 bg-[#1FA54D] text-white rounded-lg">
                                        {product.buttonText}
                                    </button>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    )
}