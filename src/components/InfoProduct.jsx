import React from 'react';

const InfoProduct = ({ title, description, image }) => {
    return (
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 items-center">
                <div className='w-full md:w-[60%]'>
                    <h2 className="text-2xl md:text-3xl  text-black uppercase font-medium mb-4 md:mb-8" dangerouslySetInnerHTML={{ __html: title }} />


                    <p className="text-black text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

                </div>
                <div className='w-full md:w-[40%]'>
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

export default InfoProduct;
