import { IoCameraSharp, IoSettingsOutline } from "react-icons/io5";
import image from "../../assets/logo.png";
import { RiMenu5Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBadgePlus } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import MessageBoxOptions from "../../components/MessageBoxOptions/MessageBoxOptions";
import SendBox from "../../components/SendBox/SendBox";
import ReceiveBox from "../../components/ReceiveBox/ReceiveBox";
import { HiMicrophone } from "react-icons/hi";
import { IoMdImages, IoMdInformationCircleOutline } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import SettingModal from "../../components/SettingModal/SettingModal";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import MemberModal from "../../components/MemberModal/MemberModal";

import image1 from "../../assets/image (1).png";
import image2 from "../../assets/image (2).jpg";
import image3 from "../../assets/image (3).jpg";
import image4 from "../../assets/group.png";
import InfoModal from "../../components/InfoModal/InfoModal";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineGroupAdd } from "react-icons/md";
import CreateGroupModal from "../../components/CreateGroupModal/CreateGroupModal";

const Home = () => {
  return (
    <>
      <SettingModal />
      <ProfileModal />
      <MemberModal />
      <InfoModal />
      <CreateGroupModal />
      {/* ------------------------- */}
      <div className="mx-auto h-screen p-2">
        <div className="flex justify-between items-center mx-3">
          <div className="font-kaushan text-2xl">Chatify</div>
          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom lg:invisible"
              data-tip="Friends"
              onClick={() =>
                document.getElementById("member_modal").showModal()
              }
            >
              <TbUsersGroup className="text-lg" />
            </button>

            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
              data-tip="Setting"
              onClick={() =>
                document.getElementById("setting_modal").showModal()
              }
            >
              <IoSettingsOutline className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
              data-tip="Profile"
              onClick={() =>
                document.getElementById("profile_modal").showModal()
              }
            >
              <FaRegUserCircle className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
              data-tip="Menu"
            >
              <RiMenu5Line className="text-lg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-5 gap-1 mx-5 mt-2 h-[580px]">
          <div className="col-span-1 border-r hidden lg:flex flex-col">
            <div className="flex items-center justify-between mx-3">
              <p className="text-sm">Groups</p>
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip"
                data-tip="Create Group"
                onClick={() =>
                  document.getElementById("create_group").showModal()
                }
              >
                <MdOutlineGroupAdd className="text-lg" />
              </button>
            </div>
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-3 p-2 overflow-scroll h-[10rem]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <NavLink key={i} to={`/chat/${i}`}>
                    <li className="flex-row gap-3 flex p-3 hover:bg-neutral cursor-pointer">
                      <img
                        src={image4}
                        alt=""
                        className="avatar w-5 h-5 rounded-full"
                      />
                      <h1 className="font-semibold text-sm">Group {i}</h1>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
            <p className="text-sm mt-6">Friends</p>
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-3 p-2 overflow-scroll h-[25rem]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (i) => (
                    <NavLink key={i} to={`/chat/${i}`}>
                      <li className="card flex-row gap-3 p-3 flex items-end hover:bg-neutral cursor-pointer transition-all duration-100">
                        <img
                          src={image1}
                          alt=""
                          className="avatar w-5 h-5 rounded-full"
                        />
                        <h1 className="font-semibold text-sm">
                          Mark Henry {i}
                        </h1>
                      </li>
                    </NavLink>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4 md:p-5">
            <Outlet />
          </div>
          {/* <div className="col-span-1 border">a</div> */}
        </div>
      </div>
    </>
  );
};
export default Home;
