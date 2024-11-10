import { useForm } from "react-hook-form";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const handleLogin = (e) => {
    console.log(e);
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={handleSubmit(handleLogin)}
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Write your email</span>
          </div>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full"
            {...register}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Write your password</span>
          </div>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered w-full"
            {...register}
          />
        </label>
        <div className="flex justify-end w-full mt-4">
          <button className="btn btn-neutral px-8">
            <FaPersonWalkingArrowLoopLeft className="text-lg" /> Login
          </button>
        </div>
      </form>
    </>
  );
};
export default Login;
