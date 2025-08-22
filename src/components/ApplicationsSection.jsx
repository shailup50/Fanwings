import React from 'react';
import { motion } from "framer-motion";

const ApplicationsSection = ({ title, description, image, points = [], stripClass = '' }) => {
  return (
    <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-medium text-black mb-6"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-gray-100 rounded-2xl p-6 md:p-10 flex md:flex-nowrap flex-wrap gap-6 items-center mb-8 flex-col-reverse md:flex-row"
      >
        <motion.div
          className="w-full md:w-[70%]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-[15px] text-black leading-relaxed space-y-4">
            {description.split("\n").map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-[30%]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={image}
            alt="Application Fan"
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className={`flex flex-wrap justify-center py-4 gap-3 ${stripClass}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#052B98] text-white text-abse md:text-lg px-6 py-4 md:py-4 rounded-[10px] text-center min-w-[45%] md:min-w-[120px] transition-all duration-300 cursor-pointer"
          >
            {point}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ApplicationsSection;
