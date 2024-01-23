import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const submitForm = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password);
    navigate(location?.state ? location.state : '/');
    
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[370px]">
        <form onSubmit={handleSubmit(submitForm)} className="mb-0 mt-6 space-y-4 rounded-2xl p-4 shadow-lg sm:p-6 lg:p-8">
          <div className="flex items-center gap-4">
            <p className="text-[#4E5D78] text-[28px] font-bold">Teachable</p>
          </div>
          <p className="text-xl font-semibold mt-[20px] text-[#404040]">Sign In to continue with Teachable</p>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#344054]">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-[#D6BBFB] border p-4 text-sm shadow-sm"
                placeholder="Enter Email" {...register("email", { required: true })} />
            </div>
          </div>
          {errors.email && <p className="text-sm font-normal text-[#F04438]">Email is required</p>}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-[#344054]">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-[#D6BBFB] border p-4  text-sm shadow-sm"
                placeholder="Enter password"  {...register("password", { required: true })} />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-[#44d0ff] px-5 py-3 text-base font-semibold text-white">
            Sign In
          </button>
          <p className="text-base font-medium text-gray-500 mt-[27px]">
            Don’t have an account??
            <Link to='/register' className="ms-2 text-[#377DFF]">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;