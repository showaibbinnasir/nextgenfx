import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ScrollTrigger from "react-scroll-trigger";
import Example from "../Example/Example";

import { Link } from "react-router-dom";
const HomeTutorial = () => {
    const [counterOn, setCounterOn] = useState(false)
    const [data, setData] = useState([])
    // const { data: data = [] } = useQuery({
    //     queryKey: ['data'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://nextgenfx-backend.vercel.app/tutorials`)
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    useEffect(() => {
        fetch("https://nextgenfx-backend.vercel.app/tutorials")
            .then(res => res.json())
            .then(data => setData(data.slice(0,3)))
    }, [])
    return (
        <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    {
                        counterOn &&
                        <h1 className=" text-[32px] text-white text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="Tutorials" /></h1>
                    }
                </div>
            </ScrollTrigger>
            <div>
                <div className="flex justify-center text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            data.map((data, i) => <div key={i}>
                                <div data-aos="fade-up" className="h-[562px] w-[332px] border border-white rounded-[20px]">

                                    <div>
                                        <img className="w-full h-[300px] object-cover rounded-[20px]" src={data.image} alt="" />
                                    </div>
                                    <div className="px-3 py-5">
                                        <h1 className="text-[32px] text-center"><abbr title={data.title} style={{ textDecoration: "none" }} >{data.title.length > 20 ? data.title.substring(0, 20) + "..." : data.title}</abbr></h1>
                                        <h1 className="text-20 text-center"><abbr title={data.description} style={{ textDecoration: "none" }} >{data.description.length > 150 ? data.description.substring(0, 150) + "..." : data.description}</abbr></h1>
                                    </div>
                                    <a target="_blank" href={data.link}>
                                        <div className="flex justify-center">
                                            <Example text="watch now"></Example>
                                        </div>
                                    </a>


                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
            <Link to="/tutorial">
                <div className="flex justify-center">
                    <Example text="See all tutorial"></Example>
                </div>
            </Link>
        </div>
    );
};

export default HomeTutorial;