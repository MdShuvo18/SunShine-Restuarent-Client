import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    // console.log(cart)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li>
            <Link to='/'>
                <button className="btn">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {user
            ? <><li onClick={handleLogout} className="btn btn-active btn-ghost ">LogOut</li></>
            : <> <li><Link to='/login'>Login</Link></li></>

        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 opacity-40 bg-black max-w-screen-xl text-green-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl text-center btn">SunShine</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;