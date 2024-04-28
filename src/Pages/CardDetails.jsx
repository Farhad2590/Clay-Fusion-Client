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
            <div className="flex w-full text-[#a86a60]">
                <div className="w-[50%] p-5 ">
                    <img src={image} alt="" className="w-full" />
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <h1 className="text-3xl font-bold">{item_name}</h1>
                    <p className="my-5">{description}</p>
                    <div>
                        <div className="flex justify-center gap-5">
                            <h6 className="text-xl"><span className="font-bold pr-2">Subcategory :</span>{subcategory_name}</h6>
                            <h6 className="text-xl"><span className="font-bold pr-2">Price :</span>{price}</h6>
                        </div>
                        <div className="flex justify-center gap-5 my-5">
                            <h6 className="text-xl"><span className="font-bold pr-2">Rating :</span>{rating}</h6>
                            <h6 className="text-xl"><span className="font-bold pr-2">Customization :</span>{customization}</h6>
                        </div>
                        <div className="flex justify-center">
                            <h6 className="text-xl"><span className="font-bold ">Processing time :</span>{processing_time}</h6>
                            
                        </div>
                        <div className="flex justify-center my-5">
                            <h6 className="text-xl"><span className="font-bold">Stock status :</span>{stock_status}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;