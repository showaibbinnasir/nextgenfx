import AboutUs from "../AboutUs/AboutUs";
import imageOne from "../../assets/mizanur.png"
import imageTwo from "../../assets/Uzayr.png"
import imageFive from "../../assets/showaib.png"
const AboutPage = () => {
    document.title = "NextgenFx | About"
    const coordinators = [
        {
            name: "Mizanur Rahman",
            image: imageOne,
            designation: "Co-founder and CEO",
            company: "NextGenFX, UK",
            tags : "3D generalist",
            speciality: "expert in Maya, Houdini and unreal engine."
        },
        {
            name: "Mohammad Uzayr Iqbal",
            image: imageTwo,
            designation: "Creative Director",
            company: "NextGenFX, UK",
            tags : "Lighting Artist | Compositor | Video Editor | Filmmaker ",
            speciality: "Expert in Maya, Unreal Engine 5, Nuke, and After Effects"
        },
        {
            name: "Syden De Oliveira Colimao",
            image: imageOne,
            designation: "Managing director",
            company: "NextGenFX, UK",
            tags : "3D Generalist | Rigging artist | animator |  texture artist  ",
            speciality: "Expert in maya , blender , substance painter"
        },
        {
            name: "Manon Laurent ",
            image: imageOne,
            designation: "Creative supervisor",
            company: "NextGenFX, UK",
            tags : "Grooming and texture artist ",
            speciality: "Expert in substance painter, Arnold, Maya (XGen)"
        },
        {
            name: "Showaib bin Nasir ",
            image: imageFive,
            designation: "Software Engineer",
            company: "NextGenFX, UK",
            tags : "Developer | Graphics Designer | 3D Environment artist",
            speciality: "Expert in MERN Stack, Adobe & Blender"
        }
    ]
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white">
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <h1 className="text-4xl py-5 text-center">Coordinators</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {
                            coordinators.map((data, i) => <div key={i}>
                                <div>
                                    <div className="flex justify-center">
                                        <img src={data.image} className="w-[300px]" alt="" />
                                    </div>
                                    <h1 className=" text-center text-4xl pt-2">{data.name}</h1>
                                    <h1 className="text-center text-2xl">{data.designation}</h1>
                                    <h1 className="text-center text-2xl">{data.tags}</h1>
                                    <h1 className="text-center text-2xl">{data.company}</h1>
                                    <h1 className="text-center text-[#70CBDD] text-2xl">{data.speciality}</h1>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;