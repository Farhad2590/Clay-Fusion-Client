import { Link } from "react-router-dom";


const CardsData = ({Cards}) => {
    console.log(Cards);
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status } = Cards
    return (
        <div className="max-w-xs rounded-md shadow-md bg-white" >
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
            <div className="flex flex-col justify-between p-6 space-y-8 " >
                <div className="space-y-2">
                    <h2 className="text-2xl text-[#a86a60] font-semibold tracking-wide">{item_name}</h2>
                    <p className="">{description}</p>
                </div>
                <Link to={`/cardsdata/${_id}`} type="button" className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">View Details</Link>
            </div>
        </div>
    );
};

export default CardsData;