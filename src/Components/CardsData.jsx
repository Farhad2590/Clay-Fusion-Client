import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CardsData = ({ Cards }) => {
    console.log(Cards);
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status } = Cards
    return (
        <div data-aos="fade-right" className="max-h-xs rounded-md shadow-md bg-white" >
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
            <div className="flex flex-col justify-between p-6 space-y-8 " >
                <div className="space-y-2">
                    <h2 className="text-2xl text-[rgb(168,106,96)] font-semibold tracking-wide">{item_name}</h2>
                    <div className="border border-dashed border-[#a86a60]"></div>

                    <p className="text-[rgb(168,106,96)]">{description}</p>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5">
                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold pr-2">Subcategory :</span>{subcategory_name}</h6>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5">
                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold pr-2">Rating :</span>{rating}</h6>
                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold pr-2">Price :</span>{price}</h6>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5 my-5">

                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold pr-2">Customization :</span>{customization}</h6>
                    </div>
                    <div className="flex  lg:justify-end">
                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold ">Processing time :</span>{processing_time}</h6>
                    </div>
                    <div className="flex  lg:justify-start my-5">
                        <h6 className="text-base text-[rgb(168,106,96)]"><span className="font-bold">Stock status :</span>{stock_status}</h6>
                    </div>
                </div>
                <Link to={`/cardsdata/${_id}`} type="button" className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">View Details</Link>
            </div>
        </div>
    );
};

export default CardsData;