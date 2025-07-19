import React from 'react';

const TechnologySection = ({ title, items = [] }) => {
    return (
        <section className="bg-[#0033A0] text-white rounded-2xl px-6 md:px-12 py-10 md:py-14">
            <h2 className="text-center text-2xl font-medium md:text-3xl mb-8 md:mb-12 uppercase">{title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-[95%] mx-auto">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 flex-wrap">

                        {item.icon && (
                            <div className="text-4xl text-white flex-wrap md:block flex gap-4 items-center">
                                <div className='md:min-w-16'>
                                <img src={item.icon} alt={item.label} className='w-12 md:w-14 object-contain mb-2 md:mb-4' />
                                </div>
                                <h3 className="text-lg  mb-1">{item.label}</h3>
                            </div>
                        )}

                        <div>

                            <p className="text-[15px]  font-light text-white leading-relaxed md:w-[80%]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologySection;
