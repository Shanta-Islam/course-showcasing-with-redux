import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { loginUser, setLoading } from "../redux/UserSlice";

const Main = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);
  
    return (
        <div>

          <Header></Header> 
          <Outlet></Outlet>
            
            
        </div>
    );
};

export default Main;