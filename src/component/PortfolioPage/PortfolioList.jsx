import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ScrollTrigger from "react-scroll-trigger";
import imageOne from "../../assets/vfx1.png"
import imageTwo from "../../assets/vfx2.png"
import imageThree from "../../assets/vfx3.png"
import Example from "../Example/Example";
import { useQuery } from "react-query";
const PortfolioList = () => {
    const [counterOn, setCounterOn] = useState(false)
    // const data = [
    //     {
    //         image: imageOne,
    //         title: "Wildlife Story",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     },
    //     {
    //         image: imageTwo,
    //         title: "Life in Space",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     },
    //     {
    //         image: imageThree,
    //         title: "Wall e",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     },
    //     {
    //         image: imageOne,
    //         title: "Wildlife story",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     },
    //     {
    //         image: imageTwo,
    //         title: "Life in Space",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     },
    //     {
    //         image: imageThree,
    //         title: "Wall e",
    //         description: "Its a recent work that we delivered to our respected client. story based on life in wild. you can watch it by simply pressing on the watch button."
    //     }
    // ]
    const { data: data = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch(`https://nextgenfx-backend.vercel.app/projects`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div>
                        {
                            counterOn &&
                            <h1 className=" text-[32px] text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="Our Portfolio" /></h1>
                        }
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                data.map((card, i) => <div key={i}>
                                    <div data-aos="fade-up" className="h-[562px] w-[332px] border border-white rounded-[20px]">

                                        <div>
                                            <img className="w-full h-[300px] object-cover rounded-[20px]" src={card.image} alt="" />
                                        </div>
                                        <div className="px-3 py-5">
                                            <h1 className="text-[32px] text-center"><abbr title={card.title} style={{ textDecoration: "none" }} >{card.title.length > 20 ? card.title.substring(0, 20) + "..." : card.title}</abbr></h1>
                                            <h1 className="text-20 text-center"><abbr title={card.description} style={{textDecoration : "none"}} >{card.description.length > 150 ? card.description.substring(0, 150) + "..." : card.description}</abbr></h1>
                                        </div>
                                        <div className="flex justify-center">
                                            <Example text="watch now"></Example>
                                        </div>

                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default PortfolioList;