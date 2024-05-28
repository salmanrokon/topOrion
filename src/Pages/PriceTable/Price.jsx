import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import emailjs from '@emailjs/browser';

const Price = () => {
    const {user}=UseAuth();
    const location = useLocation();
    const axiosSecure=UseAxiosSecure();
    const { cardData } = location.state || {};
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const saleInfo={
            name:data.name,
            email:data.email,
            service:data.service,
            price:data.price,
            details:data.details
        }
        axiosSecure.post('/sales', saleInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire(`${data.service} -added successfully`);
                sendEmail(data);
            }
 
        })
    };
    const sendEmail = (data) => {
        const emailParams = {
            name: data.name,
            email: data.email,
            service: data.service,
            price: data.price,
            details: data.details
        };

        emailjs
        .send('service_ru3v5rn', 'template_e4z895d', emailParams, 'IQMDrJD8MHbEC2oKr')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className="py-28 px-4 flex flex-col lg:flex-row w-full lg:justify-evenly">
            <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-700 h-auto lg:h-96 drop-shadow-2xl shadow-lg shadow-black-500/50 w-full lg:w-1/3 mb-8 lg:mb-0">
                <p className="text-3xl">{cardData.price}</p>
                <p className="text-lg">{cardData.name}</p>
                <ul>
                    {cardData.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-emerald-700 p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <label className="w-full">
                            <input 
                                {...register("name", { required: true })} 
                                type="text" 
                                placeholder="Name" 
                                className="input input-bordered w-full rounded-none" 
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </label>
                        <label className="w-full">
                            <input 
                                {...register("email", { required: true })} 
                                type="email" 
                                // placeholder="Email" 
                                defaultValue={user?.email}
                                className="input input-bordered w-full rounded-none" 
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <label className="w-full">
                            <select 
                                defaultValue="default" 
                                {...register("service", { required: true })} 
                                className="select select-bordered w-full rounded-none"
                            >
                                <option disabled value="default">Select service</option>
                                <option value="web development">Web Development</option>
                                <option value="E-commerce Development">E-commerce Development</option>
                                <option value="SEO">SEO</option>
                            </select>
                        </label>
                        <label className="w-full">
                            <input 
                                {...register("price", { required: true })} 
                                type="number" 
                                defaultValue={parseFloat(cardData.price.split("$")[1])}
                                className="input input-bordered w-full rounded-none" 
                            />
                            {errors.price && <span className="text-red-500">This field is required</span>}
                        </label>
                    </div>
                    <label className="form-control mb-4">
                        <textarea 
                            {...register("details", { required: true })} 
                            className="textarea textarea-bordered h-24 rounded-none w-full" 
                            placeholder="Requirement"
                        ></textarea>
                        {errors.details && <span className="text-red-500">This field is required</span>}
                    </label>
                    <button type="submit" className=" rounded-none px-20 py-4 bg-red-300 text-lg mt-4 shadow-xl">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default Price;
