import Marquee from "react-fast-marquee";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"


const Logo = () => {
    return (
        <div className="mx-auto w-[96%] pt-10 ">
            <div className="text-center p-2 border mb-10 border-[#a86a60]">
                <h1 className="text-3xl text-center font-semibold text-[#a86a60]">Our Corporate Clients</h1>
            </div>

            <Marquee className=" flex flex-col ">
            <div className=" rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo3} alt="" />
                </div>

                <div className="rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo4} alt="" />
                </div>

                <div className="rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo5} alt="" />
                </div>

                <div className="rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo6} alt="" />
                </div>

                <div className="rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo7} alt="" />
                </div>
 
                <div className="rounded-full p-1 border border-[#a86a60] mr-10">
                    <img className="" src={logo8} alt="" />
                </div>

            </Marquee>
        </div>
    );
};

export default Logo;