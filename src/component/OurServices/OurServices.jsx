import { RandomReveal } from "react-random-reveal";
import hill from "../../assets/hill.png"
import Example from "../Example/Example";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const OurServices = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white" >
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    {
                        counterOn &&
                        <h1 className=" text-[32px] text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="Our Services" /></h1>
                    }
                    <div className="flex justify-center">
                        <div className="flex gap-10 flex-col lg:flex-row ">
                            <div  data-aos="flip-up" className="w-[332px] border border-white text-center px-[24px] py-[27px] rounded-[20px]">
                                <div className="flex justify-center">
                                    <h1 className="w-[154px] text-[32px]">Film & TV Visual Effect</h1>
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="w-[284px]">Our work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                                </div>
                                <div className="flex justify-center">
                                    <img src={hill} className="w-[123px]" alt="" />
                                </div>
                                <div className="flex justify-center">
                                    <Example text={"Details"}></Example>
                                </div>
                            </div>
                            <div  data-aos="flip-down" className="w-[332px] border border-white text-center px-[24px] py-[27px] rounded-[20px]">
                                <div className="flex justify-center">
                                    <h1 className="w-[154px] text-[32px]">3D Animation & CGI</h1>
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="w-[284px]">Our work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                                </div>
                                <div className="flex justify-center">
                                    <img src={hill} className="w-[123px]" alt="" />
                                </div>
                                <div className="flex justify-center">
                                    <Example text={"Details"}></Example>
                                </div>
                            </div>
                            <div  data-aos="flip-up" className="w-[332px] border border-white text-center px-[24px] py-[27px] rounded-[20px]">
                                <div className="flex justify-center">
                                    <h1 className="w-[154px] text-[32px]">Cinematics
                                        & composit</h1>
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="w-[284px]">Our work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                                </div>
                                <div className="flex justify-center">
                                    <img src={hill} className="w-[123px]" alt="" />
                                </div>
                                <div className="flex justify-center">
                                    <Example text={"Details"}></Example>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default OurServices;