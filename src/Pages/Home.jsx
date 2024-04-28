import Slider from "../Components/Slider";
import Card from "../Components/Card";


const Home = () => {
    return (
        <div className="bg-orange-100">
            <div className="mx-auto w-[96%] pb-5">
                <Slider></Slider>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;