import React from "react";
import { FaCheck } from "react-icons/fa";

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
                                {item.heading && (
                                    <p className="text-lg md:text-xl font-medium text-white max-w-4xl mx-auto mt-4 mb-2">
                                        {item.heading}
                                    </p>
                                )}

                                <p className="text-sm md:text-base font-light">{item.text}</p>
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
                                {item.heading && (
                                    <p className="text-lg md:text-xl font-medium text-white max-w-4xl mx-auto mt-4 mb-2">
                                        {item.heading}
                                    </p>
                                )}
                                <p className="text-sm md:text-base font-light">{item.text}</p>
                            </div>
                        ))}



                    </div>
                </div>
            </section>
        </>
    )
}



export const FanCard = ({ image, title, description, points }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 p-6">

                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto rounded-2xl object-cover"
                    />
                </div>


                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium mb-4 md:mb-8">{title}</h2>
                    <p className="text-black mb-4" dangerouslySetInnerHTML={{ __html: description }} />
                    <ul className="list-disc list-outside space-y-2 text-black ms-6">
                        {points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}



export const BoxBenifits = ({
    title,
    description,
    title2,
    benefits,
    footer,
}) => {
    return (
        <>
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">{title}</h2>

            <div className="bg-[#1FA54D] text-white rounded-md py-4 px-6 md:px-10 md:py-6 mb-10 max-w-4xl mx-auto">
                <p className="text-sm md:text-base leading-relaxed">{description}</p>
            </div>

            <h3 className="text-2xl font-medium  mb-16 mt-12 text-black">
                {title2}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-10 md:w-[95%] mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="border-2 md:border-4 border-[#22A046] rounded-3xl md:rounded-4xl px-3 md:px-6 py-10 md:pt-16 relative flex flex-col items-center text-center justify-center "
                    >
                        {/* Check Icon */}
                        <div className="absolute -top-6 md:-top-8 bg-[#22A046] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white text-lg md:text-3xl shadow-md">
                            <FaCheck />
                        </div>

                        {/* Text */}
                        <p className="text-black font-normal text-base md:text-lg leading-tight">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            {footer && (
                <p className="text-black text-sm md:text-base max-w-4xl mx-auto mt-10">
                    {footer}
                </p>
            )}
        </>
    )
}



export const ApplicationSection1 = ({ title, description, listTitle, listItems, image }) => {
    return (
        <>
            <section className="py-12 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-medium mb-6">{title}</h2>
                        <p className="text-black mb-4">{description}</p>

                        {listTitle && <p className="font-semibold text-gray-900 mb-2">{listTitle}</p>}

                        <ul className="list-disc list-inside space-y-2 text-black">
                            {listItems.map((item, index) => (
                                <li key={index} className="leading-snug">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-md rounded-2xl object-contain shadow-md"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
