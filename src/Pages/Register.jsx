import { Link } from "react-router-dom";
import bg from "../assets/Animated Shape.svg"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AUthContext } from "../Autprovider/Authprovider";

const Register = () => {
    const{createUser} = useContext(AUthContext)
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
    const onSubmit = (data) =>{
        const{email,password} = data;
        createUser(email, password)
            .then(result => {
               console.log(result);
            }).catch(error =>{
                console.error(error);
            })
    }
    return (
        <div  className="min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
           
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m  bg-[#a86a60] bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-4xl font-bold text-center text-[#a86a60]">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="text-lg">
                                <label htmlFor="username" className="block text-[#a86a60]">Username</label>
                                <input type="text" name="username" id="username" placeholder="Username" className="w-full text-black px-4 py-3 rounded-md"
                                    {...register("username", { required: true })} />
                                {errors.username && <span className='text-red-600 font-bold'>!!!Username is required!!!</span>}
                            </div>
                            <div className="text-lg">
                                <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                            </div>
                            <div className="text-lg">
                                <label htmlFor="photoUrl" className="block text-[#a86a60]">PhotoUrl</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="PhotoUrl" className="w-full text-black px-4 py-3 rounded-md" />
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                <input  name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Sign Up</button>
                            </div>
                        </form>
                        <div className="flex items-center">

                            <p className="px-3 text-[#a86a60] text-lg ">Login with social accounts</p>

                        </div>
                        
                        <div className='flex justify-center gap-2'>
                            <p className="text-lg text-center text-[#a86a60]"> Dont have an account?</p>
                            <Link to="/login"><a className="underline text-[#a86a60]">  Sign In</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;