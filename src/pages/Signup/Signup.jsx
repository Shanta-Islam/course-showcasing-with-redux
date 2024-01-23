import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";



const Signup = () => {
    const { register, handleSubmit } = useForm(); 
    const navigate = useNavigate();
    const onSubmit = (data) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((authUser) => {
                signInWithEmailAndPassword(auth, data.email, data.password).then(
                    updateProfile(auth.currentUser, {
                        displayName: data.name,
                    }),
                    console.log(authUser.user)
                    
                );
                navigate('/login')
            })
            .catch((err) => {
                alert(err);
            });
    };
    return (
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[370px]">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-2xl p-4 shadow-lg sm:p-6 lg:p-8">
                    <div className="flex items-center gap-4">
                        <p className="text-[#4E5D78] text-[28px] font-bold">Teachable</p>
                    </div>
                    <p className="text-xl font-semibold mt-[20px] text-[#404040]">Sign up to join with Teachable</p>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-[#344054]">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-[#D6BBFB] border p-4 text-sm shadow-sm"
                                placeholder="Enter Full Name" {...register("name", { required: true })} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-[#344054]">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-[#D6BBFB] border p-4 text-sm shadow-sm"
                                placeholder="Enter Email" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-[#344054]">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-[#D6BBFB] border p-4  text-sm shadow-sm"
                                placeholder="Enter password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20
                                })} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-[#44d0ff] px-5 py-3 text-base font-semibold text-white">
                        Sign Up
                    </button>
                    <p className="text-base font-medium text-gray-500 mt-[27px]">
                        Already have an account?
                        <Link to='/login' className="ms-2 text-[#377DFF]">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup; 