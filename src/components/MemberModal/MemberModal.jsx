import { HiXMark } from "react-icons/hi2";

const MemberModal = () => {
  return (
    <>
      <dialog id="member_modal" className="modal">
        <div className="modal-box  max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Members</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-bottom"
                data-tip="Close"
              >
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div className="p-5">{/* edit moment */}</div>
        </div>
      </dialog>
    </>
  );
};
export default MemberModal;
