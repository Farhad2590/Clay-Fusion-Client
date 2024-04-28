import Slider from "../Components/Slider";
import Card from "../Components/Card";
import Logo from "../Components/Logo";
import OurShops from "../Components/OurShops";
import UpdatedProducts from "./UpdatedProducts";


const Home = () => {
    return (
        <div className="bg-orange-100">
            <div className="mx-auto w-[96%] pb-5">
                <Slider></Slider>
                <Card></Card>
                <Logo></Logo>
                <OurShops></OurShops>
                <UpdatedProducts></UpdatedProducts>
            </div>
        </div>
    );
};

export default Home;