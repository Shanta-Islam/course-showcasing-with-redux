

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser, selectUser } from "../../../redux/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    console.log(user);
    const handleLogout = e => {
        e.preventDefault();
        dispatch(logoutUser());
        signOut(auth);
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#000] font-bold hover:text-[#000] focus:text-[#000] bg-transparent underline " : ""}>Home</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-2xl font-bold text-black=">Teachable</a></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/6016/6016872.png" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a>{user ? user.username : 'user'}</a>
                                </li>
                                <li><Link to='/dashboard/userhome'>Dashboard</Link></li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <ul className="menu menu-horizontal mx-3">
                            <li><NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#000] font-bold hover:text-[#000] focus:text-[#000]  bg-transparent underline" : ""}>Login</NavLink></li>
                        </ul>
                }

            </div>
        </div>
    );
};

export default Header;