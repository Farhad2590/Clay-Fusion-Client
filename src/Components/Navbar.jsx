import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/Logo.png"
import logo from "../assets/Logo-preview.png"
import { useContext } from "react";
import { AUthContext } from "../Autprovider/Authprovider";
import Toogle from "./Toogle";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { logout, user } = useContext(AUthContext)
    const Navs = user ? (
        <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60]  hover:outline-none' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Home</NavLink>
            <NavLink to={'/addCard'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60]  hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Add Product</NavLink>
            <NavLink to={'/allProducts'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60]  hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>All Products</NavLink>
            <NavLink to={'/myCard'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[rgb(168,106,96)]  hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>My Product</NavLink>
        </>
    )
        :
        (<>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60]  hover:outline-none' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Home</NavLink>

            <Link to='/login'>
                <button className="btn w-full  btn-outline border border-[#a86a60]  hover:outline-none hover:text-white text-[#a86a60]">Login</button>
            </Link>
            <Link to='/register'>
                <button className="btn w-full btn-outline border border-[#a86a60]  hover:outline-none hover:text-white text-[#a86a60]">Register</button>
            </Link>
        </>)
    return (
        <div className="navbar ">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="flex flex-col gap-3 menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {Navs}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-6 md:w-8 lg:w-10" />
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-[#a86a60]">CLAY FUSION</h1>
                </div>
            </div>
            <div className="navbar-center gap-2 hidden lg:flex">
                {Navs}
            </div>
            <div className="navbar-end space-x-2">
                <Toogle></Toogle>
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                            <div className="w-10 rounded-full text-black">
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    data-tip={`<div><p>${user.displayName}</p><button class="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]" onClick=${logout}>Logout</button></div>`}
                                    data-html={true}
                                    data-for="profile-tooltip"
                                />
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                </a>
                            </li>
                            <li>
                                <button className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]"
                                    onClick={logout}
                                >Logout</button>
                            </li>

                        </ul>
                    </div>
                        : null
                }
            </div>
            <Tooltip id="profile-tooltip" />
        </div>
    );
};

export default Navbar;