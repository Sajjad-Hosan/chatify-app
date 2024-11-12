import { useParams } from "react-router-dom";
import { IoCameraSharp } from "react-icons/io5";
import { LuBadgePlus } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import SendBox from "../../components/SendBox/SendBox";
import ReceiveBox from "../../components/ReceiveBox/ReceiveBox";
import { HiMicrophone } from "react-icons/hi";
import { IoMdImages, IoMdInformationCircleOutline } from "react-icons/io";
import ReactDOM from "react-dom";

import image4 from "../../assets/group.png";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const messageRef = useRef();
  const handleSendChat = (messageData) => {
    const today = new Date();
    const data = {
      time: today.toLocaleTimeString(),
      date: today.toLocaleDateString(),
      author: user.displayName,
      message: messageData,
    };
    const div = document.createElement("div");
    div.className = "flex w-full";
    document.getElementById("message_center").append(div);
    ReactDOM.render(<SendBox msg={data} />, div);
    messageRef.current.value = "";
  };
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
            <p className="text-lg">Group 1</p>
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
          <div
            className="overflow-scroll w-full flex flex-col gap-5 items-start h-[32rem] p-2"
            id="message_center"
          >
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
              ref={messageRef}
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button
              className="btn btn-neutral flex tooltip"
              data-tip="Send"
              onClick={() => handleSendChat(messageRef.current.value)}
            >
              <BsSend className="text-lg" />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
export default ChatPage;
