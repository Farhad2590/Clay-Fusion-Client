import { useLoaderData, useParams } from "react-router-dom";
import CardsData from "./CardsData";
// import Cards from "./Cards";


const CardsSubcategory = () => {
    const { subcategory_name } = useParams()
    // console.log(subcategory_name);
    const subcategory_info = useLoaderData()
    // console.log(subcategory_info);

    const cardDetails = subcategory_info.filter(card => card.subcategory_name === subcategory_name); 

    console.log(cardDetails);

    return (
        <div className="bg-orange-100">
            <div className="mx-auto w-[96%] pb-5 pt-5">
                <h1 className="py-5 text-3xl text-center font-semibold text-[#a86a60]">{subcategory_name} Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        cardDetails.map(Cards => <CardsData Cards={Cards} key={Cards._id}></CardsData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CardsSubcategory;