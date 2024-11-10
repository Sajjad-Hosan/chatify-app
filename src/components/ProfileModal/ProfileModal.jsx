import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProfileModal = () => {
  return (
    <>
      <dialog id="profile_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Profile</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle flex tooltip tooltip-bottom"
                data-tip="Close"
              >
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div className="p-5 flex flex-col md:flex-row gap-10 mt-5">
            <img src="" className="card w-40 h-40 avatar rounded-full mx-auto" />
            <div className="flex flex-col gap-2">
              <p className="text-sm badge badge-neutral">Active</p>
              <h1 className="fon-semibold">Sajjad Hosan</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
                impedit? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Inventore, quo.
              </p>
              <div className="flex justify-end gap-5 mt-6">
                <button className="btn btn-info px-8">Logout</button>
                <Link to="/update-profile" className="btn btn-neutral px-8">
                  Manage Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProfileModal;
