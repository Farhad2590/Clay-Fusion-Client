import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Card = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-3xl font-semibold text-[#a86a60]">Products We Are Selling</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    loaderData.map(data => <Cards key={data.id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;