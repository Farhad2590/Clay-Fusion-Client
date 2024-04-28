import { useLoaderData } from "react-router-dom";

const Products = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <h2>All Products : {loaderData.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                               
                                <th>Id</th>
                                <th>Emil</th>
                                <th>Product Name</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loaderData.map(list => <tr key={list._id}>

                                    <td>{list._id}</td>
                                    <td>{list.email}</td>
                                    <td>{list.item_name}</td>
                                    <td>{list.subcategory_name}</td>
                                    <td>{list.price}</td>
                                    
                                    {/* <td>{user.lastLoggedAt}</td> */}
                                    <td><button>
                                        Details</button></td>
                                </tr>)


                            }





                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Products;