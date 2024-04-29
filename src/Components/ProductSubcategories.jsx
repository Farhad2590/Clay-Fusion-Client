import { useState, useEffect } from "react";
import SubcategoryCard from "./SubcategoryCard";

const ProductSubcategories = () => {
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subCategories')
            .then(res => res.json())
            .then(data => {
                setSubcategories(data);
            })
            .catch(error => {
                console.error('Error fetching subcategories:', error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-4xl pt-16 pb-12 font-bold text-center text-[#a86a60]">Ceramics and Pottery SubCattegories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {subcategories.map(subcategory => <SubcategoryCard key={subcategory._id} subcategory={subcategory}></SubcategoryCard>)}
            </div>
        </div>
    );
};

export default ProductSubcategories;
