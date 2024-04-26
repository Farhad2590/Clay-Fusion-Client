import { Link } from "react-router-dom";
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
    const onSubmit = () => { }
    return (
        <div className="min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="p-6  text-neutral-content">
                <h1 className="text-4xl font-bold text-center text-[#a86a60]">Add to Card</h1>
                <div className=" bg-[#a86a60] bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full  p-8 space-y-3 rounded-x">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                    <input name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                    <input name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                    <input name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                                </div>
                                <div className="text-lg w-[50%]">
                                    <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                    <input name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                </div>
                            </div>

                            <div className='text-center w-full'>
                                <button className='w-full btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Sign In</button>
                            </div>
                        </form>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddtoCart;