import { FaBookmark, FaCartPlus, FaClipboardList, FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="flex gap-4">
            <div className="">

                <div className="w-64 min-h-screen bg-blue-400 py-2 space-y-2 px-2 text-black">
                    <ul>
                        {
                            isAdmin ? <>
                                <li className="flex items-center gap-2"><FaHome /><NavLink to="/dashboard">ADMIN HOME</NavLink></li>
                                <li className="flex items-center gap-2"><FaCartPlus /><NavLink to="/dashboard/cart">Cart</NavLink></li>

                                <li className="flex items-center gap-2"><FaList /><NavLink to="/dashboard/post">POST</NavLink></li>
                                <li className="flex items-center gap-2"><FaList /><NavLink to="/dashboard/postList">POST MANAGEMENT</NavLink></li>
                                <li className="flex items-center gap-2"><FaBookmark /><NavLink to="/dashboard/bookings">MANAGE BOOKINGS</NavLink></li>
                                <li className="flex items-center gap-2"><FaClipboardList /><NavLink to="/dashboard/users">ALL USERS</NavLink></li>
                            </> :
                                <>
                                    <div className="divider divider-neutral"></div>
                                    <li className="flex items-center gap-2"><FaHome /><NavLink to="/">HOME</NavLink></li>
                                    <li className="flex items-center gap-2"><FaHome /><NavLink to="/">MY ORDERS</NavLink></li>
                                    <li className="flex items-center gap-2"><FaHome /><NavLink to="/">MY OFFER</NavLink></li>
                                </>
                        }


                    </ul>
                </div>

            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;