import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../ContextProvider";
import { toast } from 'react-toastify';

const Login = () => {
    const {userLogin} = useContext(Context)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
        .then((result) => {
            console.log(result.user);
            toast.success('Successfully Logged in')
        })
        .catch(error => {
            console.error(error.message);
        })

    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center">Please Register Now</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="password" className="input input-bordered" required />
                        <div className="flex justify-between">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <span className="text-sm">Do not have account? <Link to="/register" className="hover:underline font-semibold">Register</Link>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;