import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className="mx-10">           
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;