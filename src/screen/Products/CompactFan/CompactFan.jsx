import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/compact/banner.webp"
import { Advantage } from '../../../components/Mobility/Advantage'
import icon1 from "../../../assets/mobility/icon1.svg"
import icon2 from "../../../assets/mobility/icon2.svg"
import icon3 from "../../../assets/mobility/icon3.svg"
import adimg from "../../../assets/compact/product1.webp"
import { GridBox, InfoSection } from '../../../components/GridBox'
import ApplicationsSection from '../../../components/ApplicationsSection'
import mainimg from "../../../assets/compact/compact-fan.webp"
import { FaFan, FaCogs } from "react-icons/fa";
import { MdBolt } from "react-icons/md";

import tech1 from "../../../assets/compact/icon1.svg"
import tech2 from "../../../assets/compact/icon2.svg"
import tech3 from "../../../assets/compact/icon3.svg"
import tech4 from "../../../assets/compact/icon4.svg"


function CompactFan() {
    const banner = {
        title: "Compact Fans",
        info: `Compact fans are designed for environments where space is limited but efficient airflow is essential.
        Despite their small size, they deliver reliable performance in cooling, ventilation, and air circulation tasks.
        <br><br>
        Their lightweight and low-noise operation make them ideal for electronic enclosures, HVAC systems,
appliances, and other space-constrained applications. Compact fans are a smart choice for
high-efficiency airflow in tight spaces without compromising performance.
`,

        img: Banner
    }
    const advantages = [
        {
            icon: icon1,
            title: "Space-Saving Design",
            description:
                "Ideal for installations where size and space are limited, such as enclosures and small devices.",
        },
        {
            icon: icon2,
            title: "Efficient Cooling",
            description:
                "Provides consistent airflow for effective heat dissipation in compact systems.",
        },
        {
            icon: icon3,
            title: "Low Noise Operation",
            description:
                "Designed for quiet performance, making them suitable for noise-sensitive environments.",
        },
    ];

    const motorsData = {
        heading: "EC MOTORS : THE FUTURE OF ECOLOGY",
        greenBox:
            "Compact fans are available with AC, DC, and EC motor configurations, offering versatility for a wide range of applications and power setups. Among these, the EC motor is the most advanced and energy-efficient solution, ideal for modern compact systems.",
        features: [
            "Exceptional energy efficiency with low power consumption",
            "Quiet and smooth operation, ideal for noise-sensitive areas",
            "Precise speed control for optimized airflow",
            "Effectively overcomes resistance in enclosed or spiral duct systems.",
            "Longer lifespan with minimal maintenance",
            "Environmentally friendly and compliant with global energy standards",
        ],
        footer:
            "Compact fans with EC motors are perfectly suited for tight spaces where efficient cooling, silent operation, and smart control are essential—such as in electronics, medical equipment, and compact HVAC units.",
    };

    const leftItems = [
        {
            icon: tech1,
            text: "Compact fans with shallow, forward curved blades that provide steady airflow at low speeds."
        },
        {
            icon: tech2,
            text: "Paired with a spiral casing to increase static pressure and optimize performance."
        },
    ];

    const rightItems = [
        {
            icon: tech3,
            text: "Compact fans with shallow blades that ensure quiet operation at low speeds."
        },
        {
            icon: tech4,
            text: "Perfect balance between performance, size, and noise reduction."
        },
    ];


    const applicationText = `
    Compact fans are the perfect solution for applications where space is limited but consistent airflow is essential. Their small form factor, combined with high efficiency and quiet operation, makes them a preferred choice for modern electronic and HVAC equipment.
 These fans are particularly well-suited for: Control panels and switchgear cooling Medical and laboratory equipment Compact ventilation systems in appliances Their lightweight design, low noise, and versatility ensure seamless integration into tight or enclosed spaces, making them a reliable component in precision air handling systems.



    `;
    return (
        <>
            <InnerPageBanner data={banner} />
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16">
                <Advantage heading="Advantages" banner={adimg} data={advantages} />
            </section>
            <div className='bg-[#F1F8FF] py-4 md:my-12'>
                <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16  ">
                    <GridBox data={motorsData} />
                </section>
            </div>
            <section className='px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-8 md:py-16'>
                <InfoSection title="TECHNOLOGY" itemsLeft={leftItems} itemsRight={rightItems} />
            </section>
            <section>
                <ApplicationsSection
                    title="APPLICATIONS"
                    description={applicationText}
                    image={mainimg}

                />
            </section>

        </>
    )
}

export default CompactFan