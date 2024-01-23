import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const CoursesSlice = createSlice({
    name: "courses",
    initialState: {
        list: [],
        searchText: ""
    },
    reducers: {
        // action
        setCoursesList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setCoursesList } = CoursesSlice.actions;

export const fetchAllCourses = () => (dispatch) => {
    axios
        .get(`https://courses-server-red.vercel.app/courses`)
        .then((response) => {
            dispatch(setCoursesList(response.data));
        })
        .catch((error) => console.log(error));
};

export default CoursesSlice.reducer;
