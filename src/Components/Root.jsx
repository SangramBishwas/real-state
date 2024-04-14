import Navbar from "./Navbar";
import 'animate.css';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className="m-5 lg:mx-10">           
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;