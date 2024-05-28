import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";



const NavBar = () => {
    const {user,logOutUser}=UseAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        logOutUser()
        .then(result=>{
            console.log(result)
            navigate("/signin")
        })
       

    }
    const links=<>
   <li><Link>HOME</Link></li>
   <li><Link to="/services">SERVICES</Link></li>
   <li><Link>PORTFOLIO</Link></li>
   <li><Link>FEATURES</Link></li>
   <li><Link>TEAM</Link></li>
   <li><Link to="/contact">CONTACT</Link></li>
   {
    user ? <>
    <li><Link onClick={handleLogout}>LOG OUT</Link></li>
    </>:<li><Link to="/signin">LOG IN</Link></li>
   }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 text-black  ">
                <div className="navbar-start">
              <img className="w-20" src="https://i.ibb.co/zR6dVFq/Top-orion-psd-logo.png" alt="" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;