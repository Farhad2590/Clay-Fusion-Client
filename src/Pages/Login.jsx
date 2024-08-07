import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/Animated Shape.svg"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AUthContext } from "../Autprovider/Authprovider";
import SocialLogin from "../Components/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";


import Swal from 'sweetalert2'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser } = useContext(AUthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state || '/'
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
        const { email, password } = data;
        if (password.length < 6) {
            toast('Password should be 6 character or more')
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Password should have at lease one Uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Password should have at lease one Uppercase letter')
            return;
        }
        signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Log in successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (result.user) {
                    navigate(from)
                }
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Log in failed',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }
    return (
        <div className="min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content  text-neutral-content">
                <div className="max-w-m mt-16 bg-[#a86a60] bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-4xl font-bold text-center text-[#a86a60]">Sign In</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="email" className="block text-[#a86a60]">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="password" className="block text-[#a86a60]">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                <span className="absolute top-11 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaRegEyeSlash className="text-[#a86a60]" /> : <FaEye className="text-[#a86a60]" />}
                                </span>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]'>Sign In</button>
                            </div>
                        </form>
                        <div className="flex flex-col items-center">

                            <p className="px-3 text-[#a86a60] text-lg ">Login with social accounts</p>
                            <SocialLogin></SocialLogin>

                        </div>

                        <div className='flex justify-center gap-2'>
                            <p className="text-lg text-center text-[#a86a60]"> Dont have an account?</p>
                            <Link to="/register"><a className="underline text-[#a86a60]">  Sign Up</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;