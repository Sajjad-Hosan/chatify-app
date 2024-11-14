import { IoSettingsOutline } from "react-icons/io5";

import { RiMenu5Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

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
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const { users, groups } = useContext(AuthContext);
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
                {groups?.map(
                  ({ group_id, group_name, group_image, _id }, i) => (
                    <NavLink key={i} to={`/group/${_id}`}>
                      <li className="flex-row gap-3 flex p-3 hover:bg-neutral cursor-pointer">
                        <img
                          src={group_image}
                          alt=""
                          className="avatar w-5 h-5 rounded-full"
                        />
                        <h1 className="font-semibold text-sm">{group_name}</h1>
                      </li>
                    </NavLink>
                  )
                )}
              </ul>
            </div>
            <p className="text-sm mt-6">Friends</p>
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-3 p-2 overflow-scroll h-[25rem]">
                {users?.map(({ name, author_id, photoURL, _id }, i) => (
                  <NavLink key={i} to={`/chat/${_id}`}>
                    <li className="card flex-row gap-3 p-3 flex items-end hover:bg-neutral cursor-pointer transition-all duration-100">
                      <img
                        src={photoURL}
                        alt=""
                        className="avatar w-5 h-5 rounded-full"
                      />
                      <h1 className="font-semibold text-sm">{name}</h1>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4 md:p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
