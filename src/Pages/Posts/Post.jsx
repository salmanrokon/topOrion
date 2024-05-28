import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";


const Post = () => {
    const [showAll,setShowAll]=useState(false);
    const axiosPublic=UseAxiosPublic();
    const {data:posts=[]}=useQuery({
        queryKey:['posts'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/posts')
            return res.data
        }
    })
    const displayPost=showAll ? posts : posts.slice(0,3);
    return (
        <div>
            Total Posts: {posts.length}
            <div className="grid grid-cols-3 gap-4">
                {
                    displayPost.map(post=>(
                        <div key={post._id}>
                            <img src={post.image} alt="" />
                            <h2 className="text-3xl">{post.title}</h2>
                            
                            <Link to={`/postDetails/${post._id}`}><button className="btn btn-accent">View Details</button></Link>
                            <hr />
                        </div>
                    ))
                }
               
            </div>
            <div className="flex justify-center p-4">
            {
                !showAll && <button onClick={()=>setShowAll(true)} className="btn btn-accent ">See More</button>
            }
            </div>
        </div>
    );
};

export default Post;