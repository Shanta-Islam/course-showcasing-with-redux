import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import { fetchAllCourses } from "../../../redux/CoursesSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.courses);

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        dispatch(fetchAllCourses());
        setCourses(list);
    }, [dispatch, list]);
    return (
        <div>
            <Banner></Banner>
            <Courses courses={courses}></Courses>
        </div>
    );
};

export default Home;