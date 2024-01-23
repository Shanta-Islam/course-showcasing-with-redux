import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "../redux/UserSlice";
import  {CoursesSlice}  from "../redux/CoursesSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        courses: CoursesSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export default store;
