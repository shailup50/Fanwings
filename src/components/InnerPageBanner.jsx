import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


export const InnerPageBanner = ({ data }) => {
    const { title, info, button1, link1, button2, link2, img } = data
    return (
        <>
            <section className="bg-[#F1F8FF] py-14 md:py-24 border-b-6 rounded-bl-3xl rounded-br-3xl border-[#1FA54D] ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap md:flex-nowrap gap-10 items-center justify-between">

                        <div className="w-full md:w-[50%]">
                            <h1 className="text-[#1B1E21] font-medium text-3xl uppercase mb-4 md:mb-6 md:text-4xl">{title}</h1>
                            <p className="font-normal text-[15px] md:text-base " dangerouslySetInnerHTML={{ __html: info }} />
                            <div className="flex gap-4 md:gap-6 items-center mt-6 md:mt-10">
                                {button1 && <Link to={link1} className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-3 text-[15px] md:text-base md:px-4 md:w-52 justify-center rounded-full flex items-center gap-2 md:gap-4 hover:text-[#1FA54D] transition-all  duration-400">{button1} <IoArrowForwardCircleOutline className="text-xl" /></Link>}
                                {button2 && <Link to={link2} className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-3 text-[15px] md:text-base md:px-4 md:w-52 justify-center rounded-full flex items-center gap-2 md:gap-4 hover:text-[#1FA54D] transition-all  duration-400">{button2} <IoArrowForwardCircleOutline className="text-xl" /></Link>}


                            </div>
                        </div>
                        <div className="w-full md:w-[40%]">
                            <img src={img} alt={title} />
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

