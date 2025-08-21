import React from 'react';

const AppInfo = ({ title, description, image }) => {
    return (
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 items-center1 flex-col-reverse md:flex-row">
                <div className='w-full md:w-1/2'>
                    <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium mb-4 md:mb-8 md:mt-6" dangerouslySetInnerHTML={{ __html: title }} />


                    <p className="text-black text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

                </div>
                <div className='w-full md:w-1/2'>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default AppInfo;