import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/inline/banner.webp"
import { Advantage } from '../../../components/Mobility/Advantage';
import icon1 from "../../../assets/mobility/icon1.svg"
import icon2 from "../../../assets/mobility/icon2.svg"
import icon3 from "../../../assets/mobility/icon3.svg"
import adimg from "../../../assets/inline/Inline-Fan.webp"

function InlineFans() {
    const banner = {
        title: "Inline Fans",
        info: `Inline fans are designed to be installed directly within ductwork, making them an ideal solution for efficient
        and discreet air movement in ventilation systems. These fans are known for their compact design,
         quiet operation, and high airflow capacity, making them suitable for both residential and commercial applications
`,
        button1: "Models",
        link1: "#",
        img: Banner
    }
    const advantages = [
        {
            icon: icon1,
            title: "Powerful Airflow",
            description:
                "Efficiently moves air through duct systems, ensuring consistent ventilation across residential, commercial, and industrial setups.",
        },
        {
            icon: icon2,
            title: "Space-Efficient Design",
            description:
                "Streamlined construction fits easily within ceiling voids, walls, or ducting—ideal for installations with limited space.",
        },
        {
            icon: icon3,
            title: "Quiet Operation",
            description:
                "Engineered with noise-dampening features to deliver strong airflow with minimal sound, perfect for use in offices, kitchens, and bathrooms.",
        },
    ];
    return (
        <>
            <InnerPageBanner data={banner} />
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16">
                <Advantage heading="Advantages" banner={adimg} data={advantages} />
            </section>
        </>
    )
}

export default InlineFans