
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import axios from "axios";
import { selectUser } from "../../../redux/UserSlice";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Courses = ({ courses }) => {
    const [filter, setFilter] = useState('');
    const user = useSelector(selectUser);

    const handleLike = (id) => {

        if (user) {
            axios.patch(`https://courses-server-red.vercel.app/${id}/like`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        // refetch();
                    }
                })
        }
        else {
            toast.error('Please Login First');
        }
        // console.log(id)
    }
    return (
        <div className="mt-10">
            <div className="flex justify-center overflow-hidden ">
                <input value={filter} onChange={(e)=> setFilter(e.target.value)} type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs rounded-md rounded-r-none focus:outline-none text-black" />
            </div>
            <h2 className="text-xl font-medium text-center mt-10">Courses:</h2>
            {courses.length ? <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    courses?.filter(item=> {
                        return item.name.toLowerCase().includes(filter) || item.instructor.toLowerCase().includes(filter);

                    })
                    .map(course => <div key={course._id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-10">
                        <figure><img src={course.thumbnail} alt="thumbnail" className="h-64 w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Course Name: {course.name}</h2>
                            <p>Instructor: {course.instructor}</p>
                            <p>Duration: {course.duration}</p>
                            <p>Schedule: {course.schedule}</p>
                            <div className="card-actions justify-end">
                                <p>Total Like: {course.upVote} </p>
                                <HiOutlineHandThumbUp className="text-5xl cursor-pointer hover:text-black" onClick={() => handleLike(course._id)}></HiOutlineHandThumbUp>
                                <Link to={`/course-details/${course._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
                :
                <div>...loading</div>
            }
            <Toaster/>
        </div>
    );
};

export default Courses;