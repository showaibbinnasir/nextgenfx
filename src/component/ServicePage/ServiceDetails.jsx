import hill from "../../assets/hill.png"

const ServiceDetails = () => {
    return (
        <div className="mx-[15px] lg:mx-[50px] my-[32px] text-white" >
            <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-10">

                    <div className="w-[350px] lg:w-[666px] p-2">
                        <h1 className="text-[32px]">Films & Tv visual Effect</h1>
                        <h1 className="text-[20px] text-justify">Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                    </div>
                    <div>
                        <img src={hill} className="w-[250px]" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div>
                        <img src={hill} className="w-[250px]" alt="" />
                    </div>
                    <div className="w-[350px] lg:w-[666px] p-2">
                        <h1 className="text-[32px]">3D Animation  & CGI</h1>
                        <h1 className="text-[20px] text-justify">Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-10">

                    <div className="w-[350px] lg:w-[666px] p-2">
                        <h1 className="text-[32px]">Film & TV  Visual Effects</h1>
                        <h1 className="text-[20px] text-justify">Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.Our worOur work in film and television brings scenes to life with photo realistic VFX, CGI, and dynamic simulations. Whether it’s epic action sequences, fantasy realms, or subtle effects that enhance a narrative, NextGenFX ensures seamless integration with your story.</h1>
                    </div>
                    <div>
                        <img src={hill} className="w-[250px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;