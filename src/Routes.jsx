import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/login",
            element: <Login />
        }
      ]
    },
  ]);

  export default router;