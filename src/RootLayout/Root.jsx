import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {Outlet} from "react-router-dom"

const Root = () => {
    return (
        <div  >
            <div  >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;