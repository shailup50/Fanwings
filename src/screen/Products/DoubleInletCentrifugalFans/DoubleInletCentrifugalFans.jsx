import React from 'react'
import { InnerPageBanner } from '../../../components/InnerPageBanner'
import Banner from "../../../assets/forward/banner1.webp"
import AdvantagesGrid from '../../../components/AdvantagesGrid';
import icon1 from "../../../assets/forward/icon1.svg"
import icon2 from "../../../assets/forward/icon2.svg"
import icon3 from "../../../assets/forward/icon3.svg"
import InfoProduct from '../../../components/InfoProduct';
import info1 from '../../../assets/forward/forward1.webp';
import ApplicationsSection from '../../../components/ApplicationsSection';
import mainimg from "../../../assets/forward/application1.webp"




function DoubleInletCentrifugalFans() {
    const banner = {
        title: "Double inlet forward curved centrifugal fans",
        info: "Double inlet centrifugal fans are ideal when a strong, focused airflow, high static pressure, and a relatively large volume of air movement are required.",
        button1: "Internal",
        button2: "External",
        img: Banner
    }
    const advantagesData = [
        {
            icon: icon1,
            title: 'Directed airflow',
            description:
                'The scroll casing helps control the direction of airflow and changes dynamic pressure into static pressure.',
        },
        {
            icon: icon2,
            title: 'Low Noise Level',
            description:
                'The impeller with forward curved blades produces the same pressure as the impeller with backward curved blades but works at a lower speed. This makes these fans relatively quiet, and the emitted frequencies are less annoying to the environment.',
        },
        {
            icon: icon3,
            title: 'Constant Flow Option',
            description:
                'With the constant flow option, the fan maintains a steady airflow regardless of changes in system resistance—such as filter clogging or ductwork variations.',
        },
    ];
    const info = `
    Double inlet centrifugal fans can be equipped with various motors, including AC, EC, and DC, allowing them to adapt to different power supplies. The EC motor stands out as the most economical and efficient option among these. This electronically commutated brushless motor (EC) offers excellent performance, high efficiency, and easy regulation, leading to significant long-term savings. The EC motor is known for its reliable, quiet operation and meets modern ecological standards. Double inlet centrifugal fans with EC motors are great for devices with high static resistance and high airflow rates.
    `;
    const techData = [
        {
            description:
                'Double inlet fans are often designed with forward curved impellers and are commonly referred to as forward curved centrifugal fans.',
        },
        {
            description:
                'In a centrifugal fan, the impeller rotates around an axis that is perpendicular to the direction of the airflow. Forward curved impellers feature shallow blades that curve in the direction of rotation. These impellers can be configured with a single air inlet or with inlets on both sides (double inlet), allowing for higher airflow volume.',
        },
        {
            description:
                'Forward curved fans generate the same pressure as backward curved fans but operate at lower rotational speeds, resulting in quieter performance. They are also more compact in design but typically require a spiral (scroll) housing to effectively build up static pressure.',
        },
    ];

    const applicationText = `
    Forward curved double inlet fans are ideal for applications that require increased airflow along with relatively high installation resistance. When paired with appropriate drives and control systems, they deliver optimal performance in ventilation, cooling, and heating systems. These fans are commonly used in heat recovery units, air purifiers, kitchen hoods, and air curtains.
    `;


  return (
    <>
            <InnerPageBanner data={banner} />
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto mt-12 md:mt-16">
                <AdvantagesGrid heading="ADVANTAGES" items={advantagesData} />
            </section>
            <section className="px-6 pb-12 max-w-7xl mx-auto">
                <InfoProduct title={`EC motors : <br> The future of Ecology`} description={info} image={info1} />
            </section>
            <section className="px-6 mb-2 md:pb-12 max-w-7xl mx-auto ">
                <AdvantagesGrid heading="ADVANTAGES" items={techData} subheading="Forward Curved Blades – Double Inlet Centrifugal Fans" />
            </section>
            <section>
                <ApplicationsSection
                    title="APPLICATIONS"
                    description={applicationText}
                    image={mainimg}

                    stripClass="custom-blue-strip"
                />
            </section>

    </>
  )
}

export default DoubleInletCentrifugalFans