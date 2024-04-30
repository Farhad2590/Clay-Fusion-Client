import Slider from "../Components/Slider";
import Card from "../Components/Card";
import Logo from "../Components/Logo";
import OurShops from "../Components/OurShops";
// import UpdatedProducts from "./UpdatedProducts";
import ProductSubcategories from "../Components/ProductSubcategories";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const Home = () => {
    return (
        <div className="bg-orange-100">
            <Slider></Slider>
            <Card></Card>
            <ProductSubcategories></ProductSubcategories>
            <Logo></Logo>
            <OurShops></OurShops>
            <ToastContainer/>
        </div>
    );
};

export default Home;