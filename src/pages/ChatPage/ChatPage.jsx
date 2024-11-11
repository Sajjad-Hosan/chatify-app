import { Outlet, useLocation, useParams } from "react-router-dom";
import { IoCameraSharp, IoSettingsOutline } from "react-icons/io5";
import image from "../../assets/logo.png";
import { RiMenu5Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBadgePlus } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import SendBox from "../../components/SendBox/SendBox";
import ReceiveBox from "../../components/ReceiveBox/ReceiveBox";
import { HiMicrophone } from "react-icons/hi";
import { IoMdImages, IoMdInformationCircleOutline } from "react-icons/io";

import image1 from "../../assets/image (1).png";
import image2 from "../../assets/image (2).jpg";
import image3 from "../../assets/image (3).jpg";
import image4 from "../../assets/group.png";
const ChatPage = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={image4}
              alt=""
              className="w-10 h-10 object-contain rounded-full"
            />
            <p className="text-lg">Group {params.id}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="info"
              onClick={() => document.getElementById("info_modal").showModal()}
            >
              <IoMdInformationCircleOutline className="text-lg" />
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-between overflow-hidden h-full mb-10">
          <div className="overflow-scroll w-full flex flex-col gap-5 items-start h-[32rem] p-2">
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
            <button className="btn btn-neutral flex tooltip" data-tip="Send">
              <BsSend className="text-lg" />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
export default ChatPage;
