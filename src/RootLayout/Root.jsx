import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {Outlet} from "react-router-dom"

const Root = () => {
    return (
        <div className="bg-orange-100 ">
            <div className="mx-auto w-[95%]">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;