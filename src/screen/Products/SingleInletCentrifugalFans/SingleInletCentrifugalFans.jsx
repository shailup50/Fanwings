import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/single/banner.webp"
import AdvantagesGrid from '../../../components/AdvantagesGrid';
import icon1 from "../../../assets/forward/icon1.svg"
import icon2 from "../../../assets/forward/icon2.svg"
import icon3 from "../../../assets/forward/icon3.svg"
import InfoProduct from '../../../components/InfoProduct';
import info1 from '../../../assets/single/ec-motors.webp';
import ApplicationsSection from '../../../components/ApplicationsSection';
import mainimg from "../../../assets/single/single-inlet.webp"
import { ProductType } from '../../../components/ProductType';
import product1 from "../../../assets/single/centrifugal-fans.webp"
import TechnologySection from '../../../components/TechnologySection';
import airflow from "../../../assets/products/airflow.svg"
import motor from "../../../assets/products/motor.svg"



function SingleInletCentrifugalFans() {
    const banner = {
        title: "Single inlet forward curved centrifugal fans ",
        info: "Single inlet centrifugal fans are ideal for applications that require a focused airflow stream, high static pressure, and a relatively low volume of air.",
        button1: "Know More",
        link1: "#",
        img: Banner
    }
    const motorData = [
        {
            title: 'Single inlet forward curved centrifugal fans',
            description:
                `Single inlet centrifugal fans are ideal for applications that require a focused airflow stream, high static pressure,  and a relatively low volume of air.    <br><br>

                One of their key advantages is the ability to maintain a constant airflow even when resistance in the ductwork or system changes—thanks to their constant flow capability. This makes them particularly suitable for precise and controlled ventilation scenarios.`,
            image: product1,
        },

    ];
    const advantagesData = [
        {
            icon: icon1,
            title: 'Directed Airflow with Scroll Casing',
            description:
                'The scroll casing is designed to guide and direct airflow efficiently. It plays a crucial role in converting dynamic (velocity) pressure into static pressure, enhancing overall fan performance. ',
        },
        {
            icon: icon2,
            title: 'Low Noise Level',
            description:
                'Forward curved blade impellers generate the same pressure as backward curved ones but operate at lower rotational speeds. This results in significantly quieter performance. ',
        },
        {
            icon: icon3,
            title: 'Constant Flow Option',
            description:
                'The constant flow feature ensures that the fan maintains a steady airflow, even when system resistance changes—such as when filters become dirty. ',
        },
    ];
    const info = `
    Axial fans can be fitted with different types of motors—AC, EC, or DC—making them
    versatile for various power supply requirements. Among these, the EC (electronically commutated) motor is the most cost-effective and energy-efficient choice. This brushless motor delivers superior performance, high efficiency, and simple control, resulting in substantial long-term energy savings. <br> <br>

    Known for its reliable and quiet operation, the EC motor also meets current environmental regulations. Axial fans with EC motors are especially suited for applications that demand high airflow and operate
    efficiently in low static pressure conditions.
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
            <section className="py-10 pb-0 max-w-7xl mx-auto px-6 single_img">
                <ProductType products={motorData} />
            </section>
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto mt-12 md:mt-16">
                <AdvantagesGrid heading="ADVANTAGES" items={advantagesData} />
            </section>
            <section className="px-6 pb-12 max-w-7xl mx-auto">
                <InfoProduct title={`EC motors : <br> The future of Ecology`} description={info} image={info1} subheading="Motor Options for Single Inlet Centrifugal Fans" />
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

export default SingleInletCentrifugalFans