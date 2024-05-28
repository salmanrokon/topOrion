import { Link, useNavigate } from "react-router-dom";

import './SignIn.css';  // Assuming you add the CSS in a separate file
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignIn = () => {
    const navigate=useNavigate();
    const {logInUser}=UseAuth();
    const { register, handleSubmit,formState: { errors } } = useForm();
    
    
    
    const onSubmit =( data )=> {
        console.log(data)
        logInUser( data.email, data.password)
        .then(result=>{
             console.log(result)
             Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You are looged in",
                showConfirmButton: false,
                timer: 2000
              });
             navigate("/")
 
        })
        
    };
    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row ">
            <div className="w-1/2 flex justify-center">
                <img src="https://i.ibb.co/RBh80Tr/feature-img2.png" alt="" className="fade-in-top" />
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse w-1/3 ">
          
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                    <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Don't have account? <span><Link to="/signup">Sign up !</Link></span></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
