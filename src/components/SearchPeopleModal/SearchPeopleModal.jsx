import { useContext, useState } from "react";
import { BsPeople, BsPersonCheck, BsPersonUp } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const SearchPeopleModal = () => {
  const today = new Date();
  const [tab, setTab] = useState(0);
  const axiosPublic = useAxiosPublic();
  const { users, data, requester } = useContext(AuthContext);
  const handleSendRequest = async (id) => {
    const requestData = {
      author: data?.name,
      from: data?._id,
      to: id,
      request_date: today.toLocaleDateString(),
      request_time: today.toLocaleTimeString(),
    };
    const res = await axiosPublic.post("/send-request", requestData);
    console.log("request data", res.data);
  };
  const handleAcceptRequest = async (id) => {
    const data = {};
    const res = await axiosPublic.post("/accept-request", data);
    console.log("accept request", res.data);
  };
  return (
    <>
      <dialog id="search_modal" className="modal">
        <div className="modal-box max-w-5xl relative">
          <div className="flex justify-between items-center sticky top-0">
            <div className="flex items-center gap-5">
              <h3 className="font-semibold text-lg">Peoples</h3>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                  data-tip="All Peoples"
                  onClick={() => setTab(0)}
                >
                  <BsPeople className="text-lg" />
                </button>
                <button
                  className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                  data-tip="All Request"
                  onClick={() => setTab(1)}
                >
                  <BsPersonCheck className="text-lg" />
                </button>
              </div>
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
          <div className="p-5 overflow-hidden">
            {tab === 0 ? (
              <ul className="overflow-scroll h-full grid grid-cols-2 gap-3 p-5">
                {users?.map(({ _id, name, photoURL }, i) => (
                  <li
                    className={`flex flex-row justify-between p-2 hover:bg-neutral cursor-pointer `}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={photoURL}
                        alt={name}
                        className="avatar w-5 h-5 rounded-full"
                      />
                      <h1 className="font-semibold text-sm">{name}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-sm px-8 btn-neutral"
                        onClick={() => handleSendRequest(_id)}
                      >
                        <BsPersonUp className="text-lg" />
                        Send Request
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="overflow-scroll h-full grid grid-cols-2 gap-3 p-5">
                {requester?.map(({ _id, name, photoURL }, i) => (
                  <li
                    className={`flex flex-row justify-between p-2 hover:bg-neutral cursor-pointer `}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={photoURL}
                        alt={name}
                        className="avatar w-5 h-5 rounded-full"
                      />
                      <h1 className="font-semibold text-sm">{name}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-sm px-8 btn-neutral"
                        onClick={() => handleAcceptRequest(_id)}
                      >
                        <BsPersonCheck className="text-lg" />
                        Accept Request
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};
export default SearchPeopleModal;
