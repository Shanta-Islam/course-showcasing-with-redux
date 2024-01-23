import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../../redux/CoursesSlice";
import { getStoredCourseItem } from "../../../utility/localstorage";



const UserHome = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.courses);
    const [courses, setCourses] = useState([]);
    const [mark, setMark] = useState(false);
    useEffect(() => {
        dispatch(fetchAllCourses());
        setCourses(list);
    }, [dispatch, list]);

    const [course, setCourse] = useState([]);

    useEffect(() => {
        const storedCatIds = getStoredCourseItem();
        if (courses.length > 0) {
            const courseItems = [];
            for (const id of storedCatIds) {
                const courseItem = courses.find(courseItem => courseItem._id === id);
                if (courseItem) {
                    courseItems.push(courseItem);
                }
            }
            setCourse(courseItems);

        }

    }, [courses])
    const date = new Date().toLocaleDateString("en-US");
    const handleMark = id => {
        setMark(state => ({
            ...state, // <-- copy previous state
            [id]: !state[id] // <-- update value by index key
          }));
          
           
          
        
    }

    return (
        <div className="py-20">
            <div className=" px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {course.map(c => <div key={c._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={c.thumbnail} alt="thumbnail" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{c.name}</h2>
                        <p>Instructor: {c?.instructor}</p>
                        <p>Duration: {c?.duration}</p>
                        <p>Schedule: {c?.schedule}</p>
                        <p>Description: {c?.description}</p>
                        <p>Enrollment Status: {c.enrollmentStatus == "Open" ? "In Progress" : ""}</p>
                        <p>Due Date: {date}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleMark(c._id)}>{mark[c._id]? 'Marked': 'Mark'}</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default UserHome; 