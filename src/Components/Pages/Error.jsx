import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-center">
            <div className="space-y-3">
                <h1 className="text-6xl lg:text-9xl font-extrabold">Oops!</h1>
                <h3 className="text-3xl font-bold my-5">404 - PAGE NOT FOUND</h3>
                <p className="pb-5">The page you are looking for might have been removed,<br /> had changed the name or is temporarily unavailable.</p>
                <Link to="/">
                    <button className="btn btn-primary rounded-full text-lg">Go To Homepage</button>
                </Link>

            </div>
        </div>
    );
};

export default Error;