import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import ScrollTrigger from "react-scroll-trigger";
import image from "../../assets/vfx1.png"
import Example from "../Example/Example";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
const NewsAndUpdated = () => {
    const [counterOn, setCounterOn] = useState(false)
    // const news = [
    //     {
    //         title: "On-going Project",
    //         image: image,
    //         description: "Recently we are collaborated with a renowned company of uk, and working on a vfx project with them. We are very happy to work together with them also looking forward to have that opportunity more.",
    //         date: "09th September ,2024"
    //     },
    //     {
    //         title: "On-going Project",
    //         image: image,
    //         description: "Recently we are collaborated with a renowned company of uk, and working on a vfx project with them. We are very happy to work together with them also looking forward to have that opportunity more.",
    //         date: "09th September ,2024"
    //     },
    //     {
    //         title: "On-going Project",
    //         image: image,
    //         description: "Recently we are collaborated with a renowned company of uk, and working on a vfx project with them. We are very happy to work together with them also looking forward to have that opportunity more.",
    //         date: "09th September ,2024"
    //     },
    //     {
    //         title: "On-going Project",
    //         image: image,
    //         description: "Recently we are collaborated with a renowned company of uk, and working on a vfx project with them. We are very happy to work together with them also looking forward to have that opportunity more.",
    //         date: "09th September ,2024"
    //     }
    // ]
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('https://nextgenfx-backend.vercel.app/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (

        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    {
                        counterOn &&
                        <h1 className=" text-[32px] text-center my-[32px]"><RandomReveal isPlaying duration={1} characters="News & Updates" /></h1>
                    }
                </div>
            </ScrollTrigger>
            <div className=" border border-white p-5 rounded-[20px] flex flex-col gap-2">
            {
                    news.slice(0,3).map((data, i) => <div key={i}>
                        <div className="bg-white rounded-[20px] flex items-center gap-5">
                            <div>
                                <img className="object-cover h-[100px] w-[100px] lg:h-[169px] lg:w-[169px]" src={data.image} alt="" />
                            </div>
                            <div className="p-2">
                                <h1 className="text-black text-[16px] lg:text-[32px]">{data.title}</h1>
                                <h1 className="text-black text-[12px] lg:text-[20px]">{data.description}</h1>
                                <h1 className="text-[#8C8C8C] text-[12px] lg:text-[16px]">{data.date}</h1>
                            </div>
                        </div>
                    </div>)
                }
                
            </div>
            <Link to='/news'>
                <div className="flex justify-center">
                    <Example text="see all projects"></Example>
                </div>
            </Link>
        </div>
    );
};

export default NewsAndUpdated;