import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const Mydata = ({ items, setItem, item }) => {
    console.log(items);
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status } = items

    const handleDelete = (_id) => {
        // console.log(_id);
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

                fetch(`http://localhost:5000/products/${_id}`, {
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
                            setItem(item.filter(p => p._id !== _id));
                        }
                    })
            }
        });

    }
    return (
        <div className="max-w-xs rounded-md shadow-md bg-white" >
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
            <div className="flex flex-col justify-between p-6 space-y-8 " >
                <div className="space-y-2">
                    <h2 className="text-2xl text-[#a86a60] font-semibold tracking-wide">{item_name}</h2>
                    <div className="flex justify-between gap-5 my-5">
                        <h6 className="text-base text-[#a86a60]"><span className="font-bold pr-2">Rating :</span>{rating}</h6>
                        <h6 className="text-base text-[#a86a60]"><span className="font-bold pr-2">Price :</span>{price}</h6>
                    </div>
                    <h6 className="text-base my-5 text-[#a86a60]"><span className="font-bold pr-2">Customization :</span>{customization}</h6>
                    <div className="flex justify-end ">
                        <h6 className="text-base text-[#a86a60]"><span className="font-bold">Stock status :</span>{stock_status}</h6>
                    </div>
                </div>
                <div className="flex w-full gap-5 pr-5">
                    <Link to={`/updateProducts/${_id}`} type="button" className="w-[50%] btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Update</Link>
                    <button type="button" onClick={() => handleDelete(_id)} className="w-[50%] btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Mydata;