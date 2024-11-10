import { HiXMark } from "react-icons/hi2";

const SettingModal = () => {
  return (
    <>
      <dialog id="setting_modal" className="modal">
        <div className="modal-box  max-w-2xl">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Setting</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle flex tooltip tooltip-bottom"
                data-tip="close"
              >
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div className="p-5">
            <p className="mb-2">Theme</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <button key={i} className="btn btn-active">
                  Light
                </button>
              ))}
            </div>
            <p className="mt-6 mb-2">Voice & Sound</p>
            <div className="flex justify-between items-center w-full gap-8">
              <label htmlFor="voice" className="flex items-center gap-2 w-full">
                Sound
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-xs"
                />
                <output className="text-sm font-semibold">00</output>
              </label>
              <label htmlFor="voice" className="flex items-center gap-2 w-full">
                Voice
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-xs"
                />
                <output className="text-sm font-semibold">00</output>
              </label>
            </div>
            <p className="mt-6 mb-2">Language</p>
            <div className="grid grid-cols-4 gap-4">
              <button className="btn">Bangla</button>
              <button className="btn">English</button>
              <button className="btn">Hindi</button>
              <button className="btn">More Language</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SettingModal;
