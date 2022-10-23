import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News"
import Category from "../Pages/Category/Category"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TermsAndConditions from "../Pages/Others/Terms AndConditions/TermsAndConditions";
import Profile from "../Pages/Others/Terms AndConditions/Profile/Profile";


export const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>, 
      children: [
        {
            path: '/', 
            loader: () => fetch('http://localhost:5000/news'),
            element: <Home></Home>
        }, 
        {
            path: '/category/:id',
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
            element: <Category></Category>
        },
        {
            path: '/news/:id', 
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
            element: <PrivateRoute><News></News></PrivateRoute>
        }, 
        {
          path: '/login', 
          element: <Login></Login>
        }, 
        {
          path: '/register', 
          element: <Register></Register>
        }, 
        {
          path: '/terms',
          element: <TermsAndConditions></TermsAndConditions>
        }, 
        {
          path: '/profile', 
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    } 
  ])