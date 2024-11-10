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
import { IoMdImages } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import SettingModal from "../../components/SettingModal/SettingModal";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import MemberModal from "../../components/MemberModal/MemberModal";

import image1 from '../../assets/image (1).png'
import image2 from '../../assets/image (2).jpg'
import image3 from '../../assets/image (3).jpg'
import image4 from '../../assets/group.png'
const Home = () => {
  return (
    <>
      <SettingModal />
      <ProfileModal />
      <MemberModal />
      {/* ------------------------- */}
      <div className="mx-auto h-screen p-2">
        <div className="flex justify-between items-center mx-3">
          <div className="font-kaushan text-2xl">Chatify</div>
          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
              data-tip="Members"
              onClick={() =>
                document.getElementById("member_modal").showModal()
              }
            >
              <TbUsersGroup className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
              data-tip="Setting"
              onClick={() =>
                document.getElementById("setting_modal").showModal()
              }
            >
              <IoSettingsOutline className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
              data-tip="Profile"
              onClick={() =>
                document.getElementById("profile_modal").showModal()
              }
            >
              <FaRegUserCircle className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
              data-tip="Menu"
            >
              <RiMenu5Line className="text-lg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-5 gap-1 mx-5 mt-2 h-[580px]">
          <div className="col-span-1 border-r hidden lg:flex flex-col">
            <p className="text-sm">Groups</p>
            <ul className="flex flex-col gap-3 p-2">
              <li className="flex-row gap-3 flex p-3 bg-gray-600">
                <img src={image4} alt="" className="avatar w-5 h-5 rounded-full" />
                <h1 className="font-semibold text-sm">Group 1</h1>
              </li>
            </ul>
            <p className="text-sm mt-6">Members</p>
            <ul className="flex flex-col gap-3 p-2">
              <li className="card flex-row gap-3 p-3 flex items-end">
                <img src={image1} alt="" className="avatar w-5 h-5 rounded-full" />
                <h1 className="font-semibold text-sm">Mark Henry</h1>
              </li>
              <li className="card flex-row gap-3 p-3 flex items-end">
                <img src={image2} alt="" className="avatar w-5 h-5 rounded-full" />
                <h1 className="font-semibold text-sm">Jhon Deo</h1>
              </li>
              <li className="card flex-row gap-3 p-3 flex items-end">
                <img src={image3} alt="" className="avatar w-5 h-5 rounded-full" />
                <h1 className="font-semibold text-sm">Harry </h1>
              </li>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-4 md:p-5">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 border-b pb-3">
                <img
                  src={image4}
                  alt=""
                  className="w-10 h-10 object-contain rounded-full"
                />
                <p className="text-lg">Group 1</p>
              </div>
              <div className="mt-5 flex justify-between overflow-hidden h-full md:h-[23rem] mb-10">
                <div className="overflow-scroll w-full flex flex-col gap-5 items-start">
                  <div className="flex w-full">
                    <SendBox />
                  </div>
                  <div className="flex justify-end w-full">
                    <ReceiveBox />
                  </div>
                  <div className="flex w-full">
                    <SendBox />
                  </div>
                  <div className="flex justify-end w-full">
                    <ReceiveBox />
                  </div>
                  <div className="flex w-full">
                    <SendBox />
                  </div>
                  <div className="flex justify-end w-full">
                    <ReceiveBox />
                  </div>
                </div>
              </div>
              <footer className="flex justify-between items-center w-full md:w-[79%] fixed bottom-5 right-0  px-2">
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-circle btn-ghost flex tooltip"
                    data-tip="More"
                  >
                    <LuBadgePlus className="text-lg" />
                  </button>
                  <button
                    className="btn btn-circle btn-ghost flex tooltip"
                    data-tip="Camera"
                  >
                    <IoCameraSharp className="text-lg" />
                  </button>
                  <button
                    className="btn btn-circle btn-ghost flex tooltip"
                    data-tip="Voice"
                  >
                    <HiMicrophone className="text-lg" />
                  </button>
                  <button
                    className="btn btn-circle btn-ghost flex tooltip"
                    data-tip="Picture"
                  >
                    <IoMdImages className="text-lg" />
                  </button>
                </div>
                <div className="flex items-end gap-2 w-3/4">
                  <textarea
                    rows={1}
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                  <button
                    className="btn btn-neutral flex tooltip"
                    data-tip="Send"
                  >
                    <BsSend className="text-lg" />
                  </button>
                </div>
              </footer>
            </div>
          </div>
          {/* <div className="col-span-1 border">a</div> */}
        </div>
      </div>
    </>
  );
};
export default Home;
