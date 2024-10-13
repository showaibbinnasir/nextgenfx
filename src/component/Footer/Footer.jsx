import logo from "../../assets/logo.png"
const Footer = () => {
    return (
        <div>
            <div className=" bg-white p-[15px] lg:p-[75px] ">
                <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-24">
                    <div className="w-[350px] lg:w-[445px]">
                        <div className="flex justify-center">
                            <img className="w-[163px]" src={logo} alt="" />
                        </div>
                        <h1 className="text-justify">Ready to bring your vision to life? Whether you're working on a feature film, a video game, or a commercial project, NextGenFX is here to deliver exceptional visual effects. Get in touch with us today to discuss your project and explore the possibilities.</h1>
                    </div>
                    <div>
                        <h1 className="text-[36px] font-semibold">Address</h1>
                        <h1>Office-display Center: <br />
                            House-32, 2nd floor, Road- 08, Block- H, Mirpur 2 <br />
                            Dhaka,1216 ,Bangladesh. 01799837336 <br />
                            +8801880614408</h1>
                    </div>

                </div>

            </div>
            <div className="bg-[#1B1A1A] px-[15px] lg:px-[75px] py-2 text-white">
                <div className="flex justify-center lg:justify-end">
                    <h1 className="text-[14px]">All rights reserved by nextgenfx| Developer - Dreamweavestations</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;