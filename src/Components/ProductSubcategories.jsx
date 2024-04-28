import { useEffect } from "react";


const ProductSubcategories = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/subCategories')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ProductSubcategories;