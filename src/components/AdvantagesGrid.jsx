import React from 'react';

const AdvantagesGrid = ({ items = [], heading, subheading }) => {
    const visibleItems = items.filter(item => item.title || item.icon || item.description);

    return (
        <div className="bg-[#0033A0] text-white rounded-2xl py-10  p-6 md:p-10">
            <h2 className="text-center text-2xl md:text-3xl font-medium mb-8 md:mb-12">{heading}</h2>
            {subheading && (

                <h3 className='bg-[#1FA54D] mb-12 md:-mt-4 rounded-lg p-2 text-base font-light md:text-xl text-white text-center w-[90%] md:w-[80%] mx-auto'>{subheading}</h3>
            )
            }
            <div
                className={`flex flex-col md:flex-row justify-between items-stretch gap-8`}
            >
                {visibleItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 flex flex-col items-center1 relative px-4`}
                    >
                        {/* Top border (mobile), Left border (desktop) */}
                        {index !== 0 && (
                            <div
                                className={`${
                                    // Vertical border on desktop, horizontal on mobile
                                    'hidden md:block absolute left-0 top-4 bottom-4'
                                    }`}
                            >
                                <div className="w-[1px] h-full bg-[#fff] relative -left-4">
                                    <span className="absolute -top-[6px] -right-[2.5px] h-2 w-2 rounded-full bg-[#fff]"></span>
                                </div>
                            </div>
                        )}
                        {index !== 0 && (
                            <div
                                className={`${'block md:hidden w-full h-[1px] bg-[#fff] relative mt-2 mb-8'
                                    }`}
                            >
                                <span className="absolute -bottom-[3px] right-0 h-2 w-2 rounded-full bg-[#fff]"></span>
                            </div>
                        )}

                        {item.icon && (
                            <div className="text-4xl mb-4">
                                <img src={item.icon} alt={item.title} className='h-10 object-contain w-10' />

                            </div>
                        )}
                        {item.title && (
                            <h3 className="text-lg uppercase md:text-xl mb-4">{item.title}</h3>
                        )}

                        <p className="text-[15px] text-abse text-white" dangerouslySetInnerHTML={{ __html: item.description }} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvantagesGrid;
