import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
// import DOMPurify from 'dompurify';

const image_hosting_key=import.meta.env.VITE_image_hosting_key;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Posts = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [details, setDetails] = useState("");
    const axiosSecure = UseAxiosSecure();
    const axiosPublic=UseAxiosPublic();

    const stripHtml = (html) => {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    const onSubmit = async(data) => {
        data.details = stripHtml(details);
        console.log(data);
        const imageFile={image: data.image[0]};
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data.success){
            const dataInfo={
                title: data.title,
                details: data.details,
                image: res.data.data.display_url,
                keywords: data.keywords
            }
            axiosSecure.post('/posts',dataInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert("Post created successfully");
                    window.location.reload();
                }
            });
        }
       
    };

    const handleDetailsChange = (value) => {
        setDetails(value);
        setValue("details", value)
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row py-20 justify-between">
                <div className="lg:w-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:to-emerald-700 p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="w-full">
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    placeholder="Title"
                                    className="input input-bordered w-full rounded-none"
                                />
                                {errors.title && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="w-full">
                                <input
                                    {...register("descriptions", { required: true })}
                                    type="text"
                                    placeholder="Meta Descriptions"
                                    className="input input-bordered w-full rounded-none mt-4"
                                />
                                {errors.descriptions && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="w-full">
                                <input
                                    {...register("keywords", { required: true })}
                                    type="text"
                                    placeholder="keywords"
                                    className="input input-bordered w-full rounded-none mt-4"
                                />
                                {errors.keywords && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>

                        <label className="form-control mb-4">
                            <ReactQuill
                                value={details}
                                onChange={handleDetailsChange}
                                className="h-52 w-full"
                                placeholder="Requirement"
                            />
                            {errors.details && <span className="text-red-500">This field is required</span>}
                        </label>
                        <label>
                            <input {...register("image", { required: true })}  type="file" className="file-input file-input-bordered w-full max-w-xs mt-8" />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </label><br />
                        <button type="submit" className="btn btn-success rounded-none px-20 text-lg mt-4">Submit</button>
                    </form>
                </div>
                <div className="w-1/3 ml-12">
                    <img className="flex justify-end " src="https://i.ibb.co/0rCwYpP/kqgd-7xnk-161116.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Posts;
