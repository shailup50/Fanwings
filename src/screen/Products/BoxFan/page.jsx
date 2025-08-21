import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/box/box-type.webp"
import { ApplicationSection1, BoxBenifits, FanCard, InfoSection } from '../../../components/GridBox'
import fanImg from "../../../assets/box/BoxImg.webp"
import { Advantage } from '../../../components/Mobility/Advantage'
import icon1 from "../../../assets/mobility/icon1.svg"
import icon2 from "../../../assets/mobility/icon2.svg"
import icon3 from "../../../assets/mobility/icon3.svg"
import adimg from "../../../assets/box/advantage.webp"
import tech1 from "../../../assets/compact/icon1.svg"
import tech2 from "../../../assets/compact/icon2.svg"
import tech3 from "../../../assets/compact/icon3.svg"
import tech4 from "../../../assets/compact/icon4.svg"
import application from "../../../assets/box/application.webp"



function BoxFan() {
    const banner = {
        title: "BOX type Fans",
        info: `Box type fans are versatile ventilation solutions known for their robust construction and high airflow capacity.`,
        button1: "Models",
        link1: "#",
        img: Banner
    }
    const advantages = [
        {
            icon: icon1,
            title: "High Airflow Output",
            description:
                "Designed to move large volumes of air efficiently, ideal for medium to large ventilation systems.",
        },
        {
            icon: icon2,
            title: "Sturdy Construction",
            description:
                "Durable and corrosion-resistant housing ensures long-term performance in industrial and commercial environments.",
        },
        {
            icon: icon3,
            title: "Low Vibration & Noise",
            description:
                "Engineered with balanced impellers and vibration isolation for quiet, smooth operation",
        },
    ];
    const leftItems = [
        {
            icon: tech1,
            heading: "Forward Curved Blade Technology",
            text: "Ensures stable, low-speed airflow with reduced noise levels."
        },
        {
            icon: tech2,
            heading: "Energy-Efficient EC Motor Options",
            text: "Offers precise speed control and low power consumption."
        },
    ];

    const rightItems = [
        {
            icon: tech3,
            heading: "High Static Pressure Capability",
            text: "Compatible with spiral casings for enhanced performance in tight systems."
        },
        {
            icon: tech4,
            heading: "Compact, Low-Noise Design",
            text: "Engineered for space-constrained and noise-sensitive applications."
        },
    ];
    return (
        <>
            <InnerPageBanner data={banner} />
            <section className='px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-8 md:py-16 !pb-0'>
                <FanCard
                    image={fanImg}
                    title="BOX TYPE FANS ARE DESIGNED"
                    description="Designed in a cuboidal frame, they are ideal for systems requiring consistent air movement across larger surface areas or through ductwork <br><br> These fans are especially suitable for: <br>
                    "
                    points={[
                        "HVAC duct systems",
                        "Industrial ventilation setups",
                        "Air handling units",
                        "With their modular design, ease of installation, and low-vibration performance, box type fans offer dependable airflow control in commercial and industrial environments.",
                        "They are a reliable option when performance and durability are top priorities."
                    ]}
                />
            </section>
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16">
                <Advantage heading="Advantages" banner={adimg} data={advantages} />
            </section>
            <div className='bg-[#F1F8FF]'>
                <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-12 md:py-16 text-center">
                    <BoxBenifits
                        title="EC MOTORS : THE FUTURE OF ECOLOGY"
                        description="Box type fans are available with AC, DC, and EC motor options, allowing integration into diverse ventilation systems and power configurations. EC (Electronically Commutated) motors stand out as the most advanced and energy-efficient choice, ideal for high-performance air movement in compact housings."
                        title2="KEY BENEFITS OF EC MOTORS IN BOX TYPE FANS"
                        benefits={[
                            "Reduces energy consumption while maintaining strong airflow performance.",
                            "Delivers low-noise output, suitable for sound-sensitive applications.",
                            "Enables precise airflow regulation based on demand.",
                            "Fewer mechanical components reduce wear and maintenance needs.",
                            "Complies with global energy efficiency standards and sustainability goals."
                        ]}
                        footer="Box type fans with EC motors are ideal for HVAC systems, air handling units, industrial enclosures, and other installations requiring high airflow, compact design, and intelligent control."
                        columns={{ sm: 2, lg: 5 }} // responsive grid (2 cols tablet, 5 cols desktop)
                    />

                </section>
            </div>

            <section className='px-6 mb-2 md:pb-12 max-w-7xl mx-auto py-8 md:py-16'>
                <InfoSection title="TECHNOLOGY" itemsLeft={leftItems} itemsRight={rightItems} />
            </section>

            <ApplicationSection1
                title="APPLICATIONS"
                description="Compact fans are engineered for installations where space is limited but performance cannot be compromised. With their sleek design, efficient airflow, and whisper-quiet operation, they are the ideal solution for modern electronic and HVAC systems."
                listTitle="Key Applications:"
                listItems={[
                    "Control panels & electrical enclosures",
                    "Medical and laboratory equipment",
                    "Household and commercial appliances",
                    "Compact ventilation systems"
                ]}
                image={application}
            />



        </>
    )
}

export default BoxFan