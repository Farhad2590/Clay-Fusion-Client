import bg from "../assets/Animated-Shape-Add.svg"
import { useForm } from "react-hook-form";

const AddtoCart = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data);
        const {customization,description,image,item_name,password,price,rating,stock_status,subcategory_name} = data
        const product = {
            customization,
            description,
            image,
            item_name,
            password,
            price,
            rating,
            stock_status,
            subcategory_name
        }
        console.log(product);
    }
    return (
        <div className="min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="p-6  text-neutral-content">

                <div className=" bg-[#a86a60] bg-opacity-20 backdrop-blur-base rounded-lg">
                    <h1 className="text-4xl pt-16 font-bold text-center text-[#a86a60]">Add to Card</h1>
                    <div className="w-full  p-8 space-y-3 rounded-x">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="image" className="block text-[#a86a60]">Image Url</label>
                                    <input type="image_url" name="image" id="image" placeholder="image_Url" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("image", { required: true })} />
                                    {errors.image && <span className='text-red-600 font-bold'>!!!Image is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="item_name" className="block text-[#a86a60]">Item_name</label>
                                    <input name="item_name" id="item_name" placeholder="item_name" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("item_name", { required: true })} />
                                    {errors.item_name && <span className='text-red-600 font-bold'>!!!Item_name is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="subcategory_name" className="block text-[#a86a60]">Subcategory_name</label>
                                    <input type="subcategory_name" name="subcategory_name" id="subcategory_name" placeholder="subcategory_name" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("subcategory_name", { required: true })} />
                                    {errors.subcategory_name && <span className='text-red-600 font-bold'>!!!Subcategory_name is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="description" className="block text-[#a86a60]">Short Description</label>
                                    <input name="description" id="description" placeholder="description" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("description", { required: true })} />
                                    {errors.description && <span className='text-red-600 font-bold'>!!!description is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="price" className="block text-[#a86a60]">Price</label>
                                    <input type="price" name="price" id="price" placeholder="price" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("price", { required: true })} />
                                    {errors.price && <span className='text-red-600 font-bold'>!!!Price is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="rating" className="block text-[#a86a60]">Rating</label>
                                    <input name="rating" id="rating" placeholder="rating" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("rating", { required: true })} />
                                    {errors.rating && <span className='text-red-600 font-bold'>!!!Rating is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="customization" className="block text-[#a86a60]">Customization</label>
                                    <select
                                        id="customization"
                                        className="w-full text-black px-4 py-3 rounded-md"
                                        {...register("customization", { required: true })}
                                    >
                                        {/* <option value="">Customization</option> */}
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    {errors.customization && <span className='text-red-600 font-bold'>!!!Please select an option!!!</span>}
                                </div>

                                <div className="text-lg w-[50%]">
                                    <label htmlFor="stock_status" className="block text-[#a86a60]">Stock_status</label>
                                    <input name="stock_status" id="stock_status" placeholder="stock_status" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("stock_status", { required: true })} />
                                    {errors.stock_status && <span className='text-red-600 font-bold'>!!!Stock_status is required!!!</span>}
                                </div>
                            </div>

                            <div className='text-center w-full'>
                                <button className='w-full btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Submit</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddtoCart;

