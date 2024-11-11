import { FiPlus } from "react-icons/fi";
import { LuImagePlus } from "react-icons/lu";

const CreateGroupModal = () => {
  return (
    <>
      <dialog id="create_group" className="modal">
        <div className="modal-box max-w-xl">
          <div className="flex items-center justify-end">
            <form method="dialog">
              <button className="btn btn-sm btn-ghost">Close</button>
            </form>
          </div>
          <div className="p-5 flex flex-col">
            <p className="">Create Group</p>
            <form className="mt-7 flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="input input-bordered w-full grid-cols-2"
                  placeholder="Group Name"
                />
                <label htmlFor="image-grp" className="btn btn-neutral">
                  <LuImagePlus className="text-lg"/> Upload Picture
                  <input type="file" name="" id="image-grp" hidden />
                </label>
              </div>
              <textarea
                rows={3}
                className="textarea textarea-bordered w-full"
                placeholder="About Group"
              ></textarea>
              <div className="flex justify-end">
                <button className="btn btn-neutral px-8">
                  <FiPlus className="text-lg" /> Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default CreateGroupModal;
