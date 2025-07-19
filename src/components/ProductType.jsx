import React from "react";

export const ProductType = ({ products = [] }) => {
    const isSingle = products.length === 1;
    return (
        <>
            <div className={`grid gap-2 md:gap-14 ${isSingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-white p-6 md:gap-4 gap-3"
                    >
                        <div className="min-w-[40%] mb-4 md:mb-0 bg-[#F1F8FF]">
                            <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
                        </div>
                        <div className="  min-w-[60%] md:pl-6 text-center md:text-left">
                            <div className="inline-block">
                            <h3 className="text-lg font-medium md:text-xl text-gray-800">{product.title}</h3>
                            <div className="w-full h-[2px] bg-[#1FA54D] relative mt-3 mb-5">
                                <span className="absolute -bottom-[6px] right-0 h-3 w-3 rounded-full bg-[#1FA54D]"></span>
                            </div>
                            </div>
                            <p className="text-black text-[15px] md:text-base">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}