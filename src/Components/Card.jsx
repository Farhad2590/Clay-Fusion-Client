import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import { Typewriter } from 'react-simple-typewriter'

const Card = () => {
    const loaderData = useLoaderData()
    return (
        <div className="mx-auto w-[96%]">
            <div className="text-center my-10 border border-[#a86a60] p-2">
                <h1 className="text-3xl font-semibold text-[#a86a60]">Products We Are Selling :
                    <span className="text-[#9c4b3f] font-bold ">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Clay Products', 'Stonware Products', 'Porcelain Products', 'Terracotta Products', 'Ceramic Products', 'Pottery Products']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                {
                    loaderData.slice(0, 6).map(data => <Cards key={data._id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;