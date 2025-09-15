import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/inline/banner.webp"
import { Advantage } from '../../../components/Mobility/Advantage';
import icon1 from "../../../assets/mobility/icon1.svg"
import icon2 from "../../../assets/mobility/icon2.svg"
import icon3 from "../../../assets/mobility/icon3.svg"
import adimg from "../../../assets/inline/Inline-Fan.webp"
import { GrayInfo } from '../../../components/GrayInfo';
import { InfoSection } from '../../../components/GridBox';
import tech1 from "../../../assets/compact/icon1.svg"
import tech2 from "../../../assets/compact/icon2.svg"
import tech3 from "../../../assets/compact/icon3.svg"
import tech4 from "../../../assets/compact/icon4.svg"
import FeatureSection from '../../../components/FeatureSection';


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

    const leftItems = [
        {
            icon: tech1,
            heading: "High Airflow Efficiency",
            text: "Delivers consistent performance across long duct runs with minimal pressure drop."
        },
        {
            icon: tech2,
            heading: "EC Motor Compatibility",
            text: "Optional EC motors provide advanced speed control and high energy efficiency."
        },
    ];

    const rightItems = [
        {
            icon: tech3,
            heading: "Low-Noise Operation",
            text: "Engineered for quiet function, ideal for residential, commercial, and noise-sensitive environments. "
        },
        {
            icon: tech4,
            heading: "Space-Saving Construction",
            text: "Compact cylindrical housing allows easy installation in ceiling voids, wall recesses, and tight mechanical spaces."
        },
    ];



    return (
        <>
            <InnerPageBanner data={banner} />
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16">
                <Advantage heading="Advantages" banner={adimg} data={advantages} />
            </section>
            <GrayInfo
                title="EC MOTORS"
                subtitle="THE FUTURE OF ECOLOGY"
                description={`Inline fans are designed for installation directly within ductwork, offering a powerful and space-saving solution
                for continuous airflow in ventilation systems. Their streamlined construction makes them ideal for concealed
                applications where maintaining airflow without compromising space or aesthetics is critical.
                <br>  <br> Inline fans are compatible with various motor types, including AC, DC, and EC motors, allowing flexibility
                in performance, efficiency, and control. Among these, EC motor-equipped inline fans stand out for their superior
                energy efficiency, quiet operation, and precise speed regulation.
                `}
            />
            <section className='px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-8 md:py-16'>
                <InfoSection title="TECHNOLOGY" itemsLeft={leftItems} itemsRight={rightItems} />
            </section>
            <FeatureSection
                title="Applications"
                description={`Efficient. Space-Saving. Versatile. Inline fans are designed for seamless integration within duct systems, offering a perfect balance of performance and space efficiency. Whether used in ventilation, air extraction, or cooling applications, they deliver reliable airflow with minimal noise.`}
                features={[
                    "Duct-Integrated Design",
                    "High Static Pressure Capability",
                    "Quiet Operation",
                    "EC Motor Options",
                ]}
            />
        </>
    )
}

export default InlineFans