import Slider from "../Components/Slider";
import Card from "../Components/Card";
import Logo from "../Components/Logo";
import OurShops from "../Components/OurShops";
// import UpdatedProducts from "./UpdatedProducts";
import ProductSubcategories from "../Components/ProductSubcategories";


const Home = () => {
    return (
        <div className="bg-orange-100">
            <div className="mx-auto w-[96%] pb-5">
                <Slider></Slider>
                <Card></Card>
                <ProductSubcategories></ProductSubcategories>
                <Logo></Logo>
                <OurShops></OurShops>
               
            </div>
        </div>
    );
};

export default Home;