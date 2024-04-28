import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/Logo.png"
import logo from "../assets/Logo-preview.png"
import { useContext } from "react";
import { AUthContext } from "../Autprovider/Authprovider";

const Navbar = () => {
    const { logout, user } = useContext(AUthContext)
    const Navs = user ? (
    <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60] hover:bg-[#a86a60] hover:outline-none' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Home</NavLink>
        <NavLink to={'/addCard'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60] hover:bg-[#a86a60] hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Add Product</NavLink>
        <NavLink to={'/allProducts'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60] hover:bg-[#a86a60] hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>All Products</NavLink>
        <NavLink to={'/myCard'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60] hover:bg-[#a86a60] hover:outline-none ' : 'btn btn-outline-none bg-none text-[#a86a60]'}>My Product</NavLink>
    </>
    )
        :
        (<>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-outline border border-[#a86a60] text-[#a86a60] hover:bg-[#a86a60] hover:outline-none' : 'btn btn-outline-none bg-none text-[#a86a60]'}>Home</NavLink>
        </>)
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navs}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-12" />
                    <h1 className="text-3xl text-[#a86a60]">CLAY FUSION</h1>
                </div>
            </div>
            <div className="navbar-center gap-2 hidden lg:flex">
                {Navs}
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                            <div className="w-10 rounded-full text-black">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                            </li>
                            <li>
                                <button className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]"
                                    onClick={logout}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Login</button>
                        </Link>
                }
            </div>
            {/* <Link to="/login" className="navbar-end">
                <a className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">Log in</a>
            </Link> */}
        </div>
    );
};

export default Navbar;