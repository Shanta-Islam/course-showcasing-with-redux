
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../redux/UserSlice";
 

const PrivateRoute = ({ children }) => {  
    const user = useSelector(selectUser);
    const location = useLocation();
    // console.log(location.pathname);

    if (user) {
        return children; 
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;