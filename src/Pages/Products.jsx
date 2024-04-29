import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const Products = () => {
    const loaderData = useLoaderData()
    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-[#a86a60] py-5">All Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-auto">
                    <thead>
                        <tr>
                            <th className="hidden md:table-cell">Sl No.</th>
                            <th className="w-full md:w-auto">User Email</th>
                            <th className="w-full md:w-auto">Product Name</th>
                            <th className="w-full md:w-auto">Subcategory</th>
                            <th className="w-full md:w-auto">Price</th>
                            <th className="w-full md:w-auto">Rating</th>
                            <th className="w-full md:w-auto">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loaderData.map((list, index) => (
                                <tr key={list._id}>
                                    <td className="hidden md:table-cell">{index + 1}.</td>
                                    <td className="w-full md:w-auto">{list.email}</td>
                                    <td className="w-full md:w-auto">{list.item_name}</td>
                                    <td className="w-full md:w-auto">{list.subcategory_name}</td>
                                    <td className="w-full md:w-auto">{list.price}</td>
                                    <td className="w-full md:w-auto">{list.rating}</td>
                                    <td className="w-full md:w-auto">
                                        <Link
                                            to={`/cardsdata/${list._id}`}
                                            type="button"
                                            className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;