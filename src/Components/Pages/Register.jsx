import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../../ContextProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, updateUserProfile } = useContext(Context);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleInputPassword = (data) => {
        console.log(data.password.target.value);
    }
    const Register = (data) => {
        const { email, password, name, PhotoURL } = data;

        creatUser(email, password)
            .then(() => {
                toast.success('Successfully Registered');
                updateUserProfile(name, PhotoURL)
                    .then(() => {
                        navigate("/")
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="my-10">
            <Helmet>
                <title>BdLand | Register</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center">Please Register Now</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5">
                <form onSubmit={handleSubmit(Register)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            name="name" className="input input-bordered" required
                            {...register("name", { required: true })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" required
                            {...register("PhotoURL", { required: true })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required
                            {...register("email", { required: true })} />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleInputPassword}
                            placeholder="password" className="input input-bordered" required
                            {...register("password", {
                                required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                            })} />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ?
                            <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && errors.password.type === "minLength" && (<span>Password must be atleast 6 digit.</span>)}
                        {errors.password && errors.password.type === "pattern" && (<span>Password must be atleast one uppercase and one lowercase letter.</span>)}

                        <div className="flex justify-between">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <span className="text-sm">Already have account? <Link to="/login" className="hover:underline font-semibold">Login</Link>
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

export default Register;