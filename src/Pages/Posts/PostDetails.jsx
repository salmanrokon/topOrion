import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const PostDetails = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                const initialPost = data.find(post => post._id === id);
                setSelectedPost(initialPost);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="py-32">
            <Helmet>
                <title>TopOrion</title>
                <meta name="description" content="Description of your home page for SEO purposes" />
                <meta name="keywords" content={selectedPost?.keywords} />
                <meta name="author" content="Your Name or Company" />
                <meta property="title" content={selectedPost?.title} />
                <meta property="description" content="Description of your home page for SEO purposes" />
            </Helmet>
            <div className="flex flex-col lg:flex-row w-full gap-10 justify-between px-4">
                <div className="max-h-min bg-blue-400">
                    <p className="text-2xl font-semibold text-center">All Posts</p> <br />
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id} className="cursor-pointer text-blue-500" onClick={() => handlePostClick(post)}>
                                {post.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2">
                    {selectedPost && (
                        <>
                            <img src={selectedPost.image} alt="" />
                            <p className="text-2xl">{selectedPost.title}</p>
                            <div className="break-all">
                                {selectedPost.details}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
