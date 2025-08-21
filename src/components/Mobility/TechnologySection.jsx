export default function TechnologySection({ title, subtitle, features }) {
    return (
        <section className="bg-[#F3F8FC] py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium  mb-4 md:mb-7">
                    {title}
                </h2>
                <div className="inline-block bg-[#22A046] text-white text-base md:text-xl font-light py-2 px-6 rounded-lg mb-4 md:mb-10 md:w-[60%]">
                    {subtitle}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:w-[90%] mx-auto">
                    {features.map((item, index) => (
                        <div key={index} className="relative  pt-4 md:pt-0">
                            <div
                                className={`absolute -top-2 md:top-1left-0 md:-left-4 h-full ${index !== 0 ? "md:border-l border-t w-full md:w-0 border-dotted border-[#22A046]" : ""
                                    }`}
                            >
                                <span className={`w-3 h-3 ${index !== 0 ? "bg-[#22A046] rounded-full absolute md:-left-[6px] md:top-0 right-0 -top-[8px]" : ""} `} />
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-black mb-2 md:w-[90%] mx-auto line-clamp-2 md:h-16">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm md:w-[90%] mx-auto">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
