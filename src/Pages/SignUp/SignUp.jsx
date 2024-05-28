import { useEffect, useRef } from 'react';
import './sign.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import Swal from 'sweetalert2';
import { sendEmailVerification } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const SignUp = () => {
    const {createUser}=UseAuth();
    const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm();
    
    
    
    const onSubmit =( data )=> {
        console.log(data)
        createUser( data.email, data.password)
        .then(result=>{
            const userInfo={
                name:data.name,
                email:data.email,
                password:data.password
            }
            sendEmailVerification(auth.currentUser)
            .then(result=>{
                console.log(result);
            })
            .catch(error=>{
                console.log(error.message)
            })
             console.log(result)
             axiosPublic.post('/users',userInfo)
             .then(res=>{
                 console.log(res.data)
                 if(res.data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully registered",
                        icon: "success"
                      });
                      navigate('/')
                     console.log(res.data.insertedId)
                 }
             })
 
        })
        
    };
    const imageRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    imageRef.current.classList.add('in-view');
                } else {
                    imageRef.current.classList.remove('in-view');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row ">
            <div className="w-1/2 flex justify-center">
                <img ref={imageRef} src="https://i.ibb.co/RBh80Tr/feature-img2.png" alt="" className="image" />
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse w-1/3 ">

                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })}  type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email&& <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Allready have account? <span><Link to="/signin">Sign In !</Link></span></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;