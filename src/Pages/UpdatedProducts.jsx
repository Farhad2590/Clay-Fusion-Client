
import { useLoaderData } from "react-router-dom";
import bg from "../assets/Animated-Shape-Add.svg"
import Swal from "sweetalert2";


const UpdatedProducts = () => {
    const product = useLoaderData()
    console.log(product);
    const { _id, customization, processing_time, description, image, item_name, price, rating, stock_status, subcategory_name } = product
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.item_name.value;
        const image = form.image.value;
        const processing_time = form.processing_time.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stock_status = form.stock_status.value;

        const updateUserData = {
            item_name,
            image,
            processing_time,
            description,
            price,
            rating,
            customization,
            stock_status
        }

        console.log(updateUserData);

        // const updateCoffee = {name,quantity,supplier,taste,category,details,photo_url}

        // console.log(updateCoffee);
        fetch(`http://localhost:5000/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUserData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: ' Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (


        <div className="min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="p-6  text-neutral-content">

                <div className=" bg-[#a86a60] bg-opacity-20 backdrop-blur-base rounded-lg">
                    <h1 className="text-4xl pt-16 font-bold text-center text-[#a86a60]">Update Card</h1>
                    <div className="w-full  p-8 space-y-3 rounded-x">
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="w-full text-lg">
                                <label htmlFor="subcategory_name" className="block text-[#a86a60]">Subcategory_name</label>
                                <select name="subcategory_name" defaultValue={subcategory_name} id="subcategory_name" className="w-full text-black px-4 py-3 rounded-md" required>
                                    {/* <option value="">Select Subcategory</option> */}
                                    <option value="Clay-made pottery">Clay-made pottery</option>
                                    <option value="Stoneware">Stoneware</option>
                                    <option value="Porcelain">Porcelain</option>
                                    <option value="Terra Cotta">Terra Cotta</option>
                                    <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                    <option value="Home decor pottery">Home decor pottery</option>
                                </select>

                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="image" className="block text-[#a86a60]">Image Url</label>
                                    <input type="image_url" name="image" id="image" placeholder="image" defaultValue={image} className="w-full text-black px-4 py-3 rounded-md" required />

                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="item_name" className="block text-[#a86a60]">Item_name</label>
                                    <input name="item_name" id="item_name" placeholder="item_name" defaultValue={item_name} className="text-black w-full px-4 py-3 rounded-md" required />
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="processing_time" className="block text-[#a86a60]">Processing_time</label>
                                    <input name="processing_time" id="processing_time" placeholder="processing_time" defaultValue={processing_time} className="text-black w-full px-4 py-3 rounded-md" required />
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="description" className="block text-[#a86a60]">Short Description</label>
                                    <input name="description" id="description" placeholder="description" defaultValue={description} className="text-black w-full px-4 py-3 rounded-md" required />
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="price" className="block text-[#a86a60]">Price</label>
                                    <input type="price" name="price" id="price" placeholder="price" defaultValue={price} className="w-full text-black px-4 py-3 rounded-md" required />
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="rating" className="block text-[#a86a60]">Rating</label>
                                    <input name="rating" id="rating" placeholder="rating" defaultValue={rating} className="text-black w-full px-4 py-3 rounded-md" required />
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="customization" className="block text-[#a86a60]">Customization</label>
                                    <select
                                        id="customization"
                                        name="customization"
                                        defaultValue={customization}
                                        className="w-full text-black px-4 py-3 rounded-md"
                                        required
                                    >
                                        {/* <option value="">Customization</option> */}
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="stock_status" className="block text-[#a86a60]">Stock_status</label>
                                    <input name="stock_status" id="stock_status" placeholder="stock_status" defaultValue={stock_status} className="text-black w-full px-4 py-3 rounded-md" required />
                                </div>
                            </div>
                            <div className='text-center w-full'>
                                <button type="submit" className='w-full btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Submit</button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProducts;