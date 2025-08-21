import React from "react";


export const GridBox = ({ data }) => {
    if (!data) return null;
    return (
        <>

            <div className="max-w-7xl mx-auto text-center">

                {data.heading && (
                    <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium mb-4 md:mb-8">
                        {data.heading}
                    </h2>
                )}

                {data.greenBox && (
                    <div className="bg-[#1FA54D] text-white rounded-md p-6 mb-12 max-w-3xl mx-auto">
                        <p className="text-sm md:text-base font-normal leading-relaxed">
                            {data.greenBox}
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
                    {data.features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center relative">

                            <div className="flex items-center mb-4   relative w-full justify-center h-full">

                                {((idx + 1) % 3 !== 0) && (
                                    <>
                                        <div class="hidden md:block absolute right-0 top-4 bottom-4">
                                            <div class="w-[1px] h-full border border-dashed border-[#1FA54D] relative -right-6">
                                                <span class="absolute -top-[6px] -right-[4px] h-2 w-2 rounded-full bg-[#1FA54D]"></span>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="border border-black p-4   shadow-sm w-full h-full text-center">
                                    <p className="text-[15px] md:text-base">{feature}</p>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>

                {data.footer && (
                    <p className="mt-12 text-black text-[15px] md:text-base max-w-4xl mx-auto">
                        {data.footer}
                    </p>
                )}
            </div>

        </>
    )
}




export const InfoSection = ({ title, itemsLeft = [], itemsRight = [] }) => {
    return (
        <>
            <section className="bg-blue-900 text-white rounded-2xl p-8 md:p-12">
                {/* Title */}
                {title && (
                    <h2 className="text-2xl md:text-3xl text-center font-medium  text-white mb-10">
                        {title}
                    </h2>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 relative">

                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l border-white"></div>

                    <div className="flex flex-col items-center md:items-end gap-12 pr-0 md:pr-8">
                        {itemsLeft.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col  items-center text-center   max-w-sm"
                            >
                                {item.icon && (
                                    <div className="bg-white text-blue-900 rounded-full w-18 h-18 flex items-center justify-center mb-4">
                                        <img src={item.icon} alt={item.title} className='w-12 object-contain' />
                                    </div>
                                )}
                                <p className="text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-12 pl-0 md:pl-8 mt-12 md:mt-0">
                        {itemsRight.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col  items-center text-center    max-w-sm"
                            >
                                {item.icon && (
                                    <div className="bg-white text-blue-900 rounded-full w-18 h-18 p-4 flex items-center justify-center mb-4">
                                        <img src={item.icon} alt={item.title} className='12 h-12 object-contain' />

                                    </div>
                                )}
                                <p className="text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}



                    </div>
                </div>
            </section>
        </>
    )
}
