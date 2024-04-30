import { useState, useEffect } from "react";
import SubcategoryCard from "./SubcategoryCard";

const ProductSubcategories = () => {
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch('https://b9a10-server-side-farhad2590.vercel.app/subCategories')
            .then(res => res.json())
            .then(data => {
                setSubcategories(data);
            })
            .catch(error => {
                console.error('Error fetching subcategories:', error);
            });
    }, []);

    return (
        <div className="mx-auto w-[96%]">
            <div className="text-center my-10 border border-[#a86a60] p-2">
                <h1 className="text-4xl  font-bold text-center text-[#a86a60]">Ceramics and Pottery SubCattegories</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {subcategories.map(subcategory => <SubcategoryCard key={subcategory._id} subcategory={subcategory}></SubcategoryCard>)}
            </div>
        </div>
    );
};

export default ProductSubcategories;
