import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../LayOut/Main/Main";

import Service from "../Pages/Home/Services/Service";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Price from "../Pages/PriceTable/Price";
import Contact from "../Pages/Contact/Contact";
import Posts from "../Pages/Dashboard/Posts/Posts";
import Dashboard from "../LayOut/Main/Dashboard";
import PostList from "../Pages/Dashboard/PostList/PostList";
import PostDetails from "../Pages/Posts/PostDetails";
import Users from "../Pages/Dashboard/Users/Users";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/services",
          element:<Service></Service>
        },
        {
          path:"/signin",
          element:<SignIn></SignIn>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/price",
          element:<Price></Price>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/postDetails/:id",
          element:<PostDetails></PostDetails>,
          
        }
        
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"postList",
          element:<PostList></PostList>
        },
        {
          path:"post",
          element:<Posts></Posts>
        },
        {
          path:"users",
          element:<Users></Users>,
          // loader:({params})=>fetch(`http://localhost:5000/users${params.id}`)
        }
      ]
    },

  ]);
  export default router;