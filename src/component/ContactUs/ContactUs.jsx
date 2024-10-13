import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ScrollTrigger from "react-scroll-trigger";
import hill from "../../assets/hill.png"
import { Input, Textarea } from "keep-react";
import Example from "../Example/Example";
const ContactUs = () => {
    const [counterOn, setCounterOn] = useState(false)
    
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    {
                        counterOn &&
                        <h1 className=" text-[32px] text-white text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="Contact Us" /></h1>
                    }
                </div>
            </ScrollTrigger>
            <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row items-center">
                    <div>
                        <img className="w-[250px] lg:w-[400px]" src={hill} alt="" />
                    </div>
                    <div className="w-[350px] lg:w-[665px] flex flex-col gap-2">
                        <Input placeholder="Enter name" type="text" />
                        <Input placeholder="Enter email" type="email" />
                        <Textarea placeholder="Write your message here." rows={8} />


                    </div>
                </div>
                <div className="flex justify-center">
                    <Example text="Submit"></Example>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;