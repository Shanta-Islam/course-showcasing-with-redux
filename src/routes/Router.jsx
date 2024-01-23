import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Signin from "../pages/Signin/Signin";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Signup from "../pages/Signup/Signup";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Signin></Signin>,
            },
            {
                path: "/register",
                element: <Signup></Signup>,
            },
            {
                path: "/course-details/:id",
                element: <CourseDetails></CourseDetails>,
            },





        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            }
        ]
    },




]);

export default router;