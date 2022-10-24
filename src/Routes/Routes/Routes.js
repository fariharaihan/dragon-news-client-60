import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../layout/Main";
import Categories from "../../Pages/Cetegori/Categories/Categories";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/login/Login/Login";
import Signup from "../../Pages/login/Signup/Signup";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/others/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])