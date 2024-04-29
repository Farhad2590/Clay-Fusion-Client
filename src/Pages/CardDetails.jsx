import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cardInfo = useLoaderData()
    const { id } = useParams()
    console.log(cardInfo);
    const cardDetails = cardInfo.find(card => card._id === id);
    console.log(cardDetails);
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status } = cardDetails
    return (
        <div className="bg-orange-100">
            <div className="flex flex-col lg:flex-row w-full text-[#a86a60]">
                <div className="w-full lg:w-1/2 p-5">
                    <img src={image} alt="" className="w-full" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold">{item_name}</h1>
                    <div className="border border-dashed border-[#a86a60]"></div>
                    <p className="my-5">{description}</p>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5">
                        <h6 className="text-xl"><span className="font-bold pr-2">Subcategory :</span>{subcategory_name}</h6>
                        <h6 className="text-xl"><span className="font-bold pr-2">Price :</span>{price}</h6>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5 my-5">
                        <h6 className="text-xl"><span className="font-bold pr-2">Rating :</span>{rating}</h6>
                        <h6 className="text-xl"><span className="font-bold pr-2">Customization :</span>{customization}</h6>
                    </div>
                    <div className="flex  lg:justify-start">
                        <h6 className="text-xl"><span className="font-bold ">Processing time :</span>{processing_time}</h6>
                    </div>
                    <div className="flex  lg:justify-end my-5">
                        <h6 className="text-xl"><span className="font-bold">Stock status :</span>{stock_status}</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;