import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "./ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
        return <span className="flex justify-center loading loading-ring loading-lg mx-auto"></span>
    } else if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.element
};

export default PrivateRoute;