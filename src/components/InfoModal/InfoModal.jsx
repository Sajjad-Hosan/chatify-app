import { HiXMark } from "react-icons/hi2";
import image from "../../assets/image (1).png";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { TbUsersPlus } from "react-icons/tb";
import { LuFileBox } from "react-icons/lu";
import { TiPinOutline } from "react-icons/ti";

const InfoModal = () => {
  return (
    <>
      <dialog id="info_modal" className="modal">
        <div className="modal-box max-w-xl">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">info</h1>
            <div className="flex items-center gap-3">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Pin messages"
              >
                <TiPinOutline className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Files"
              >
                <LuFileBox className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Add members"
              >
                <TbUsersPlus className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Share"
              >
                <FaRegShareFromSquare className="text-lg" />
              </button>
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                  data-tip="Close"
                >
                  <HiXMark className="text-lg" />
                </button>
              </form>
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-5">
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={image}
                  alt=""
                  className="avatar w-36 h-36 object-contain rounded-xl"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-3 p-3">
                <p className="text-sm badge badge-neutral">Active</p>
                <p className="text-xl">Group name</p>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  culpa quidem dolorem, nesciunt voluptates perspiciatis
                  delectus in iste excepturi quaerat!
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-4">
              <button
                className="btn btn-neutral flex tooltip"
                data-tip="Button"
              >
                A
              </button>
              <button
                className="btn btn-neutral flex tooltip"
                data-tip="Button"
              >
                A
              </button>
              <button
                className="btn btn-neutral flex tooltip"
                data-tip="Button"
              >
                A
              </button>
              <button
                className="btn btn-neutral flex tooltip"
                data-tip="Button"
              >
                A
              </button>
            </div> */}
            <ul className="flex flex-wrap gap-5 mt-5 mx-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <li
                  key={i}
                  className="flex rounded-full transition-all duration-100 cursor-pointer w-16 h-16 tooltip"
                  data-tip="Sajjad"
                >
                  <img
                    src={image}
                    alt=""
                    className="object-contain rounded-full hover:scale-110 transition-all duration-200"
                  />
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-4 mt-5">
              <button className="btn btn-neutral px-8">Edit Group</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default InfoModal;
