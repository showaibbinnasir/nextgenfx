import { useEffect, useState } from "react";
const NewsPage = () => {
    const [news, setNews] = useState([])
    document.title = "NextgenFx | News"
    useEffect(()=>{
        fetch('https://nextgenfx-backend.vercel.app/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
            <h1 className="text-4xl text-center">News & Updates</h1>
            <div style={{ overflowX: "hidden" }} className=" border border-white h-[450px] overflow-scroll p-5 rounded-[20px] flex flex-col gap-2">
                {
                    news.map((data, i) => <div key={i}>
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
        </div>
    );
};

export default NewsPage;