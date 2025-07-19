import React from "react";
import { InnerPageBanner } from "../../../components/InnerPageBanner";
import Banner from "../../../assets/products/axial-fan.webp"
import { ProductType } from "../../../components/ProductType";
import product1 from "../../../assets/products/internal-rotor.webp"
import product2 from "../../../assets/products/external-rotor.webp"
import AdvantagesGrid from "../../../components/AdvantagesGrid";
import icon1 from "../../../assets/products/icon1.svg"
import icon2 from "../../../assets/products/icon2.svg"
import icon3 from "../../../assets/products/icon3.svg"
import InfoProduct from "../../../components/InfoProduct";
import info1 from "../../../assets/products/ec-motor.webp"
import TechnologySection from "../../../components/TechnologySection";
import airflow from "../../../assets/products/airflow.svg"
import motor from "../../../assets/products/motor.svg"
import ApplicationsSection from "../../../components/ApplicationsSection";
import mainimg from "../../../assets/products/axial.png"





function AxialFans() {
    const banner = {
        title: "Axial Fans",
        info: "Axial fans are compact and versatile industrial fans designed to deliver high airflow efficiency, making them cost-effective by reducing long-term operating expenses.",
        button1: "Internal",
        link1: "#",
        button2: "External",
        link2: "#",
        img: Banner
    }
    const motorData = [
        {
            title: 'INTERNAL ROTOR',
            description:
                'Internal rotor motors are compact and efficient motors where the rotor is located inside the stator, providing reliable performance and helping to reduce maintenance costs over time.',
            image: product1,
        },
        {
            title: 'EXTERNAL ROTOR',
            description:
                'External rotor motors feature the rotor positioned around the outside of the stator, offering a compact design that improves cooling and enhances durability while keeping long-term operating costs low.',
            image: product2,
        },
    ];
    const advantagesData = [
        {
            icon: icon1,
            title: 'High Efficiency:',
            description:
                'They are used in applications that require high airflow, minimal noise, and low energy usage. These fans are typically installed in systems or structures.',
        },
        {
            icon: icon2,
            title: 'Low noise level:',
            description:
                'Our axial fans are engineered for low-noise performance, making them ideal for settings where maintaining a quiet environment is essential.',
        },
        {
            icon: icon3,
            title: 'Durability and Reliability:',
            description:
                'Axial fan motors are built using robust materials, providing dependable operation even in demanding industrial environments.',
        },
    ];

    const info = `
Axial fans can be fitted with different types of motors—AC, EC, or DC—making them versatile for various power supply requirements. Among these, the EC (electronically commutated) motor is the most cost-effective and energy-efficient choice. This brushless motor delivers superior performance, high efficiency, and simple control, resulting in substantial long-term energy savings.
 <br><br>
Known for its reliable and quiet operation, the EC motor also meets current environmental regulations. Axial fans with EC motors are especially suited for applications that demand high airflow and operate efficiently in low static pressure conditions.
`;

    const technologyItems = [
        {
            icon: airflow,
            label: 'Airflow',
            description:
                'In axial fans, the impeller rotates along an axis that runs in the same direction as the airflow. The fan’s aerodynamic blades guide the air to flow straight along the axis of the spinning motor.',
        },
        {
            icon: motor,
            label: 'Motor',
            description:
                'The motor is the central element of an industrial axial fan, directly influencing the airflow and static pressure the fan can produce. The motor’s power must be appropriately matched to the impeller.',
        },
    ];

    const applicationText = `
Our axial fans offer versatile solutions suitable for both industrial and commercial applications. Their compact design makes them easy to incorporate into existing setups, and their specifications can be customized to meet specific performance needs.

They are available in multiple configurations—such as with or without protective grilles, with mounting plates, and in either suction or blowing versions—allowing flexibility for different system designs. Compact EC axial fans are ideal in situations that demand high airflow with low resistance. Their optimized motor and control systems ensure efficient airflow management. These fans are commonly used in refrigeration, HVAC, ventilation, and renewable energy systems.
`;

    const pointsArray = [
        'Chillers',
        'Dry Coolers',
        'Refrigeration',
        'Condensers',
        'Heat Pumps',
        'Fan Heaters',
    ];

    return (
        <>
            <InnerPageBanner data={banner} />
            <section className="py-10 max-w-7xl mx-auto px-6">
                <ProductType products={motorData} />
            </section>
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto">
                <AdvantagesGrid heading="ADVANTAGES" items={advantagesData} />
            </section>
            <section className="px-6 pb-12 max-w-7xl mx-auto">
                <InfoProduct title={`EC motors : <br> The future of Ecology`} description={info} image={info1} />
            </section>
            <section className="px-6 pb-12 max-w-7xl mx-auto">
                <TechnologySection title="Technology" items={technologyItems} />
            </section>
            <section>
                <ApplicationsSection
                    title="APPLICATIONS"
                    description={applicationText}
                    image={mainimg}
                    points={pointsArray}
                    stripClass="custom-blue-strip"
                />
            </section>
        </>
    )
}

export default AxialFans