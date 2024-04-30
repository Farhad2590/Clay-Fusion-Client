import { useContext, useEffect, useState } from "react";
import { AUthContext } from "../Autprovider/Authprovider";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = () => {
    const { user } = useContext(AUthContext);
    const [items, setItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    const handleCategoriesFilter = filter => {
        if (filter === 'all') {
            setDisplayItems(items)
        }
        else if (filter === 'yes') {
            const yes = items.filter(item => item.customization === 'yes')
            setDisplayItems(yes)
        }
        else if (filter === 'no') {
            const no = items.filter(item => item.customization === 'no')
            setDisplayItems(no)
        }
    }

    useEffect(() => {
        fetch(`https://b9a10-server-side-farhad2590.vercel.app/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
                setDisplayItems(data)
            });
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-server-side-farhad2590.vercel.app/products/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            setItems(items.filter(p => p._id !== _id));
                        }
                    });
            }
        });
    };



    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-[#a86a60] py-5">My Products</h1>
            <div className="border border-dashed border-[#a86a60] mb-5"></div>
            <div className=" text-lg text-center mb-5">
                <details className="dropdown">
                    <summary className="m-1 btn">Categories</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCategoriesFilter('all')}><a>All</a></li>
                        <li onClick={() => handleCategoriesFilter('yes')}><a>Yes</a></li>
                        <li onClick={() => handleCategoriesFilter('no')}><a>No</a></li>
                    </ul>
                </details>
            </div>

            <div className="mx-auto w-[96%] pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {displayItems.map(item => (
                        <div key={item._id} className="max-h-xs rounded-md shadow-md bg-white" >
                            <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                            <div className="flex flex-col justify-between p-6 space-y-8 " >
                                <div className="space-y-2">
                                    <h2 className="text-2xl text-[#a86a60] font-semibold tracking-wide">{item.item_name}</h2>
                                    <div className="flex justify-between gap-5 my-5">
                                        <h6 className="text-base text-[#a86a60]"><span className="font-bold pr-2">Rating :</span>{item.rating}</h6>
                                        <h6 className="text-base text-[#a86a60]"><span className="font-bold pr-2">Price :</span>{item.price}</h6>
                                    </div>
                                    <h6 className="text-base my-5 text-[#a86a60]"><span className="font-bold pr-2">Customization :</span>{item.customization}</h6>
                                    <div className="flex justify-end ">
                                        <h6 className="text-base text-[#a86a60]"><span className="font-bold">Stock status :</span>{item.stock_status}</h6>
                                    </div>
                                </div>
                                <div className="flex w-full gap-5 pr-5">
                                    <Link to={`/updateProducts/${item._id}`} type="button" className="w-[50%] btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Update</Link>
                                    <button type="button" onClick={() => handleDelete(item._id)} className="w-[50%] btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCard;
