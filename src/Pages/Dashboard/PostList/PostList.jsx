import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";


const PostList = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: posts = [],refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure.get('/posts')
            return res.data
        }
    })
    const handleDeletePost=(id)=>{
        console.log(id)
        axiosSecure.delete(`/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            refetch();
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Title</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {
        posts.map((post,index) =><tr key={post._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={post.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
             {post.title}
            </td>
            
            <th>
              <button 
              onClick={()=>handleDeletePost(post._id)}
               className="btn btn-accent btn-md"><FaTrash></FaTrash> Delete</button>
            </th>
          </tr>)
      }
      
      {/* row 2 */}
      
     
    
    </tbody>
  
    
  </table>
</div>
           
        </div>
    );
};

export default PostList;