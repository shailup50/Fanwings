import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/backward/banner.webp"
import AdvantagesGrid from '../../../components/AdvantagesGrid';
import icon1 from "../../../assets/backward/icon1.svg"
import icon2 from "../../../assets/backward/icon2.svg"
import icon3 from "../../../assets/backward/icon3.svg"
import InfoProduct from '../../../components/InfoProduct';
import info1 from '../../../assets/forward/forward1.webp';
import ApplicationsSection from '../../../components/ApplicationsSection';
import mainimg from "../../../assets/backward/application1.webp"
import { ProductType } from '../../../components/ProductType';
import product1 from "../../../assets/backward/product1.webp"


function BackwardCurvedCentrifugalFan() {
    const banner = {
        title: "Backward Curved Fan",
        info: `Plug fans are radial fans equipped with
        backward-curved blades. <br><br>
        They are known for their compact design and their ability to deliver extremely high static pressure.`,

        img: Banner
    }
    const motorData = [
        {
            title: 'Backward Curved Fan',
            description:
                'Plug fans are radial fans equipped with backward-curved blades. They are known for their compact design and their ability to deliver extremely high static  pressure.',
            image: product1,
        },

    ];
    const advantagesData = [
        {
            icon: icon1,
            title: 'High static pressure and efficiency:',
            description:
                'Centrifugal fans with backward-curved blades are compact and versatile industrial fans, offering high airflow efficiency even at elevated static pressures.',
        },
        {
            icon: icon2,
            title: 'Universality:',
            description:
                'Plug-in centrifugal fans achieve high static pressure for large airflows. Their compact design and high efficiency make them popular for ventilation systems.',
        },
        {
            icon: icon3,
            title: 'Durability and efficiency:',
            description:
                'Fanwings fans are engineered for efficiency and user comfort. They feature high-quality components and subassemblies, ensuring quiet, reliable, and long-lasting operation.',
        },
    ];
    const info = `
    Centrifugal fans can be fitted with a variety of motor types, including AC, DC, and EC motors, making
them adaptable to diverse power supply requirements. Among these, the EC (Electronically
Commutated) motor stands out as the most energy-efficient and cost-effective solution. As a
brushless motor, it delivers exceptional performance, high efficiency, and simple speed control,
resulting in significant long-term energy savings. <br />EC motors are known for their reliable, quiet operation and compliance with modern environmental
standards. When combined with backward-curved centrifugal fans, they are ideal for applications
demanding high airflow and high static pressure.
    `;
    const techData = [
        {
            description:
                `Plug fans, which are a type of centrifugal fan, use backward-curved impellers to efficiently move air. <br><br> In centrifugal fans, air is discharged outward from the impeller, perpendicular to the motor's axis of  rotation.  `
        },
        {
            description:
                `Unlike forward-curved impellers, backward-curved impellers feature fewer but longer blades that rotate in the opposite direction to the airflow. <br><br/> These impellers typically require higher rotational speeds but are significantly  more efficient at generating pressure.`,
        },
        {
            description:
                `Their aerodynamic design not only improves performance but also reduces the risk of motor overload, making them ideal for high-pressure applications where reliability and efficiency are critical.`,
        },
    ];

    const applicationText = `
    Radial fans deliver high airflow and excellent static pressure performance, making them ideal for demanding
ventilation tasks. Their compact and robust design allows for easy integration into a wide range of
applications.    These fans are particularly effective in overcoming system resistance, making them well-suited for use in:  Their efficiency and reliability make radial fans a preferred choice for environments requiring consistent and powerful airflow.

    `;
    const pointsArray = [
        'Ventilation units',
        'Air Purifiers',
        'Heat Recovery Systems',
        'Air Conditioning Systems',
        'Industrial ventilation setups',

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
                <InfoProduct title={`EC motors : <br> The future of Ecology`} description={info} image={info1} />
            </section>
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto ">
                <AdvantagesGrid heading="ADVANTAGES" items={techData} subheading="Backward-Curved Blades – Plug Fan" />
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

export default BackwardCurvedCentrifugalFan