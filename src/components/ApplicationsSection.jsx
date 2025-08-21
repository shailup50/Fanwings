import React from 'react';

const ApplicationsSection = ({ title, description, image, points = [], stripClass = '' }) => {
  return (
    <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-medium  text-black mb-6">{title}</h2>

      <div className="bg-gray-100 rounded-2xl p-6 md:p-10 flex md:flex-nowrap  flex-wrap gap-6 items-center mb-8 flex-col-reverse md:flex-row">
        <div className='w-full md:w-[70%]'>
        <div className="text-[15px] text-black leading-relaxed space-y-4">
          {description.split('\n').map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        </div>


        <div className="w-full md:w-[30%]">
          <img src={image} alt="Application Fan" className="w-full max-w-md object-contain" />
        </div>
      </div>


      <div
        className={`flex flex-wrap justify-center py-4 gap-3 ${stripClass}` }
      >
        {points.map((point, idx) => (
          <div
            key={idx}
            className="bg-[#052B98] text-white text-abse md:text-lg px-6 py-4 md:py-4 rounded-[10px] text-center min-w-[45%] md:min-w-[120px]"
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsSection;
