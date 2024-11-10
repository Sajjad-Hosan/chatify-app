import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  FaPersonWalkingArrowRight,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegisterUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleRegister = (e) => {
    console.log(e);
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="flex justify-end w-full">
          {image ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="avatar h-44"
              />
              <span
                className="absolute btn btn-xs"
                onClick={() => setImage(null)}
              >
                <FaRegTrashAlt />
              </span>
            </div>
          ) : (
            <label htmlFor="pro-image" className="btn btn-neutral px-8">
              <LuImagePlus className="text-lg" /> Add Picture
              <input
                type="file"
                name="image"
                id="pro-image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          )}
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Write your name</span>
          </div>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full"
            {...register("name")}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Write your email</span>
          </div>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full"
            {...register("email")}
          />
        </label>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="label-text">Write your password</span>
          </div>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered w-full"
            {...register("password")}
          />
          {/* <span className="absolute right-5">
            {show ? <FaRegEye /> : <FaRegEyeSlash />}
          </span> */}
        </label>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-neutral px-8">
            <FaPersonWalkingArrowRight className="text-lg" />
            Register
          </button>
        </div>
      </form>
    </>
  );
};
export default Register;
