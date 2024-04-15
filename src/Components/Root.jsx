import Navbar from "./Navbar";
import 'animate.css';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";
const Root = () => {
    return (
        <div>           
            <Navbar />
            <Outlet className="m-5 lg:mx-10" />
            <Footer />
        </div>
    );
};

export default Root;