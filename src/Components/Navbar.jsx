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
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>
    return (
        <div>
            <ToastContainer />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BdLand</a>
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
                        <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName || 'user'}`}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL || userimg} />
                                </div>
                            </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-52 z-[1] p-2 shadow bg-black text-white rounded-box w-auto space-y-2">
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