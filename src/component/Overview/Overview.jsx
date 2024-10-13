import { Link } from "react-router-dom";
import cover from "../../assets/Default.png"
import logo from "../../assets/logo.png"

import Example from "../Example/Example"
const Overview = () => {
    return (
        <div className="flex justify-center mt-10">
            <div style={{
                backgroundImage: `url(${cover})`,
                height: "367px",
                borderRadius: "20px"

            }} className="flex items-center bg-no-repeat mx-[15px] lg:mx-[50px]">
                <div className="text-white">
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <h1 className="text-[14px] lg:text-[24px] ">Hello</h1>
                            <img className="w-[140px] lg:w-[280px]" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-[-10px] lg:mt-[-60px]">
                        <div className="w-[75%] lg:w-[45%]">
                            <h1 className=" text-[14px] lg:text-[24px] text-center"><span className="text-[#70CBDD]">NEXTGEN</span> FX is a uk based vfx company where a bunches of
                                dedicated, expert and dynamic artists work together.
                                this is one of the best solution for you vfx works</h1>
                        </div>
                    </div>
                    <Link to="/about">
                        <div className="flex justify-center">
                            <Example text={"SEE DETAILS"}></Example>
                        </div></Link>
                </div>
            </div>
        </div>
    );
};

export default Overview;