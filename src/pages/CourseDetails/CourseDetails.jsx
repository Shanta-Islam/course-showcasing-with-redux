import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveCourseItem } from "../../utility/localstorage";
import { selectUser } from "../../redux/UserSlice";
import { useSelector } from "react-redux";

const CourseDetails = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch(`https://courses-server-red.vercel.app/course/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [id])
    const handleEnroll = () => { 
        if(user){
            saveCourseItem(id);
            navigate("/dashboard/userHome")
        }
        else{
            navigate("/login");
        }
    }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl m-40 mx-auto">
            <figure><img src={course?.thumbnail} alt="thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course?.name}</h2>
                <p>Instructor: {course?.instructor}</p>
                <p>Duration: {course?.duration}</p>
                <p>Schedule: {course?.schedule}</p>
                <p>Description: {course?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleEnroll}>Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;