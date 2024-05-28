import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet-async";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        emailSend(data);
    };
    const emailSend=(data)=>{
        console.log(data);
        const emailInfo={
            name: data.name,
            email:data.email,
            service: data.service,
            details: data.details
        }
        emailjs.send('service_ru3v5rn', 'template_e4z895d', emailInfo, 'IQMDrJD8MHbEC2oKr')
        .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    }
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="flex w-full py-20 ml-4">
            <div className=" py-20 w-full">
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
                                    placeholder="Email"
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
                                    <option disabled value="default">Select a topic</option>
                                    <option value="web development">Web Development</option>
                                    <option value="E-commerce Development">E-commerce Development</option>
                                    <option value="SEO">SEO</option>
                                </select>
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
                        <button type="submit" className="btn btn-success rounded-none px-20 text-lg mt-4">Submit</button>
                    </form>
                </div>

            </div>
            <div className="w-1/3 items-end relative">
                <img className=" flex justify-end items-end" src="https://i.ibb.co/xzykVLm/2.png" alt="" />
                <div className="absolute top-1/2 -translate-x-3/4 -translate-y-36 -left-56">
                    <h1 className="text-7xl  text-black font-bold ">Contact Us</h1>
                    <p className=" text-black text-2xl ml-4">You are just one step away !!</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;