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
        <div className="my-10">
            <h1 className="text-3xl text-center font-semibold text-[#a86a60]">Our Corporate Clients</h1>
            <Marquee className="p-5 flex flex-col gap-5">
                <img className="mr-10" src={logo1} alt="" />
                <img className="w-16 " src={logo2} alt="" />
                <img className="" src={logo3} alt="" />
                <img className="" src={logo4} alt="" />
                <img className="" src={logo5} alt="" />
                <img className="" src={logo6} alt="" />
                <img className="" src={logo7} alt="" />
                <img className="" src={logo8} alt="" />
            </Marquee>
        </div>
    );
};

export default Logo;