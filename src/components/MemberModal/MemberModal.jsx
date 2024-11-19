import { HiXMark } from "react-icons/hi2";
import image from "../../assets/image (1).png";
import { MdBlock } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";

import image1 from "../../assets/image (1).png";
import image2 from "../../assets/image (2).jpg";
import image3 from "../../assets/image (3).jpg";
import image4 from "../../assets/group.png";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TbUserSearch } from "react-icons/tb";
const MemberModal = () => {
  const { groups, data } = useContext(AuthContext);
  return (
    <>
      <dialog id="member_modal" className="modal">
        <div className="modal-box max-w-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <h3 className="font-semibold text-lg">Friends</h3>
              <button
                className="btn btn-sm btn-ghost btn-circle flex tooltip"
                data-tip="Search People"
                onClick={() =>
                  document.getElementById("search_modal").showModal()
                }
              >
                <TbUserSearch className="text-lg" />
              </button>
            </div>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Close"
              >
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="overflow-hidden">
              <ul className="flex flex-wrap gap-3 p-2 overflow-scroll ">
                {data?.groups?.map((i) => (
                  <NavLink key={i} to={`/chat/${i}`}>
                    <li
                      className="flex w-10 h-10 rounded-full justify-center items-center hover:bg-neutral cursor-pointer tooltip tooltip-right"
                      data-tip="Group-1"
                    >
                      <img
                        src={image4}
                        alt=""
                        className="avatar rounded-full"
                      />
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
            <p className="text-sm mt-6">Friends</p>
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-3 p-2 overflow-scroll h-[23rem]">
                {data?.friends?.map((i) => (
                  <NavLink key={i} to={`/chat/${i}`}>
                    <li className="card flex-row gap-3 p-3 flex items-end bg-neutral cursor-pointer">
                      <img
                        src={image1}
                        alt=""
                        className="avatar w-5 h-5 rounded-full"
                      />
                      <h1 className="font-semibold text-sm">Mark Henry</h1>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default MemberModal;
