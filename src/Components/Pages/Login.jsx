import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../ContextProvider";
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputPassword, setInputPassword] = useState('')
    const { userLogin, googleLogin, updateUserProfile } = useContext(Context);
    const location = useLocation()
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Successfully Logged in');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error.message);
            })

    }

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value)
        console.log(e.target.value)
    }
    const handleSignInWithGoogle = () => {
        googleLogin()
            .then((result) => {
                toast.success('Successfully Logged in');
                const user = result.user
                updateUserProfile(user.displayName, user.photoURL)
                    .then(() => {
                        navigate(location?.state ? location.state : "/");
                    })
                    .catch((error) => console.log(error))
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center">Please Login</h2>
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
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleInputPassword}
                            placeholder="password" className="input input-bordered" required />
                        {inputPassword &&
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">
                                {showPassword ?
                                    <FaEye /> : <FaEyeSlash />}
                            </span>
                        }
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
                        <button className="btn btn-primary text-lg">Log in</button>
                    </div>
                    <div className="border-y-2 w-full py-2 mt-3">
                        <h3 className="text-lg font-semibold text-center">Or Sign Up with</h3>
                    </div>
                </form>
                <div className="flex justify-center gap-5 mb-4">
                    <button onClick={handleSignInWithGoogle} className="btn text-xl rounded-3xl"><FcGoogle /></button>
                    <button className="btn text-xl rounded-3xl"><ImGithub /></button>
                    <button className="btn text-xl rounded-3xl"><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;