import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../ContextProvider";
import userimg from "../assets/user.png";

const Navbar = () => {
    const { user, LogOut } = useContext(Context)
    console.log(user);
    const handleLogOut = () => {
        LogOut()
            .then()
            .catch(error => console.error(error))
    }
    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-lg font-bold" : "italic text-lg"}>Home</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "text-lg font-bold" : "italic text-lg"}>Register</NavLink></li>

        {user &&
            <>
                <li><NavLink to="/update&profile" className={({ isActive }) => isActive ? "text-lg font-bold" : "italic text-lg"}>Update Profile</NavLink></li>
                <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-lg font-bold" : "italic text-lg"}>Services</NavLink></li>
            </>
        }
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-lg font-bold" : "italic text-lg"}>About</NavLink></li>
    </>
    return (
        <div className="">
            <ToastContainer />
            <div className="navbar pl-16 bg-base-300 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-bold text-2xl lg:text-4xl">BdLand</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {!user ?
                    <div className="navbar-end">
                        <Link to="/login" className="btn text-lg font-semibold">Login</Link>
                    </div> :
                    <div className="dropdown dropdown-end flex justify-end w-1/2">
                        <div className="tooltip tooltip-left z-50" data-tip={`${user?.displayName || 'user'}`}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL || userimg} />
                                </div>
                            </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-52 z-50 p-2 shadow bg-black text-white rounded-box w-auto space-y-2">
                            <li className="justify-between">
                                <span className="font-semibold">{user?.displayName || 'User'}</span>

                            </li>
                            <li>
                                <span className="font-semibold">{user?.email}</span>
                            </li>
                            <li>
                                <button className="btn btn-sm">
                                    <Link to="/update&profile">
                                        Update Your Profile
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-sm" onClick={handleLogOut}>Logout</button>
                            </li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;