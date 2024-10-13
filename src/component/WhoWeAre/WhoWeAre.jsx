import { RandomReveal } from "react-random-reveal";
import hill from "../../assets/hill.png"
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const WhoWeAre = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px]" >
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="text-white text-center">
                    {
                        counterOn &&
                        <h1 className="text-[32px]"><RandomReveal isPlaying duration={1} characters="Who We Are" /></h1>
                    }
                    <div data-aos="fade-up" className="flex justify-center">
                        <h1 className="w-[100%] text-justify lg:text-center lg:w-[50%] text-[16px] lg:text-[20px]"><span className="text-[#00aced]">NextGenFX</span> is a leading VFX studio driven by innovation, creativity, and a passion for visual storytelling. With a team of world-class artists and cutting-edge technology, we deliver breathtaking visual effects that transform ideas into immersive realities. From Hollywood blockbusters to indie films, gaming, commercials, and more—our work spans industries and genres, ensuring the highest quality for every project.</h1>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        className="flex justify-center  ">
                        <img className="w-[200px] lg:w-[500px]" src={hill} alt="" />
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default WhoWeAre;