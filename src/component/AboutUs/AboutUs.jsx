import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ScrollTrigger from "react-scroll-trigger";
import hill from "../../assets/hill.png"
const AboutUs = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    {
                        counterOn &&
                        <h1 className=" text-[32px] text-white text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="About Us" /></h1>
                    }
                </div>
            </ScrollTrigger>
            <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div className="w-[350px] lg:w-[666px] p-2">
                        <h1 className="text-[24px] lg:text-[32px]">Our Process</h1>
                        <h1 className="text-[16px] lg:text-[20px] text-justify">At NextGenFX, every project begins with collaboration. We work closely with directors, producers, and creative teams to understand the vision behind the project. Through meticulous planning, research, and execution, we ensure that every frame is crafted with precision and care. From pre-visualization to post-production, our process is designed to deliver stunning results on time and within budget.</h1>
                    </div>
                    <div>
                        <img className="w-[250px] lg:w-[400px]" src={hill} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;