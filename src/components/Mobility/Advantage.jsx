import React from 'react'

export const Advantage = ({ data, heading, banner }) => {

    return (
        <>
            <section className="  bg-white">
                <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium text-center md:text-left mb-10">{heading}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
                    <div className="w-full h-full">
                        <img
                            src={banner}
                            alt="Industrial Fan"
                            className="  w-full max-w-xl mx-auto"
                        />
                    </div>

                    <div className="w-full bg-[#012A8D] text-white p-6 py-8 md:py-14 md:p-14 rounded-xl h-full relative">
                        <div className='h-[75%] w-3 md:w-4 bg-[#1FA54D] absolute -left-[6px] md:-left-2 top-2/4 -translate-y-1/2'></div>
                        {data.map((item, index) => (
                            <div key={index} className="flex items-start gap-6 md:gap-8 mb-8 md:mb-14 last:mb-0">
                                <img src={item.icon} alt={item.title} className='w-12 object-contain' />
                                <div>
                                    <h3 className="font-medium text-lg md:text-xl mb-3 uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-[15px] md:text-base font-light">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
