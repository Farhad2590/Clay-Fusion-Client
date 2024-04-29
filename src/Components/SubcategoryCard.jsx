import { Link } from "react-router-dom";


const SubcategoryCard = ({subcategory}) => {
    console.log(subcategory);
    const {image,subcategory_name,description} = subcategory
    return (
        <div className="max-w-xs rounded-md shadow-md bg-white" >
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
            <div className="flex flex-col justify-between p-6 space-y-8 " >
                <div className="space-y-2">
                    <h2 className="text-2xl text-[#a86a60] font-semibold tracking-wide">{subcategory_name}</h2>
                    <p className="">{description}</p>
                </div><Link to={`/subCategorydata/${subcategory_name}`}  type="button" className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">View All Cards</Link>
                
            </div>
        </div>
    );
};

export default SubcategoryCard;