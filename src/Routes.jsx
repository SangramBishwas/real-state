import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
// import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import UpdateProfile from "./Components/Pages/UpdateProfile";
import LandDetails from "./Components/Pages/LandDetails";
import PrivateRoute from "./PrivateRoute";
import Services from "./Components/Sections/Services";
import Error from "./Components/Pages/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />,
            loader: () => fetch('/Lands.json')
        },
        {
            path: "/Lands.json/:id",
            element: <PrivateRoute><LandDetails /></PrivateRoute>,
            loader: () => fetch('/Lands.json')
        },
        {
            path: "/register",
            element: <Register />
        },
        // {
        //     path: "/about",
        //     element: <About />
        // },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/service",
            element: <Services />
        },
        {
            path: "/update&profile",
            element: <UpdateProfile/>
        }
      ]
    },
  ]);

  export default router;