import MessageBoxOptions from "../MessageBoxOptions/MessageBoxOptions";

const SendBox = ({ msg }) => {
  const { message, time } = msg;
  return (
    <>
      <div className="card flex flex-col p-2 w-[400px] bg-neutral">
        <div className="flex justify-between gap-2">
          <div className="flex items-end gap-2">
            <img src="" alt="" className="w-8 h-8 avatar rounded-full" />
            <div className="flex flex-col gap-1">
              <p className="mt-2 text-sm p-2">{message}</p>
              <p className="text-xs ml-auto">{time}</p>
            </div>
          </div>
          <MessageBoxOptions />
        </div>
      </div>
    </>
  );
};
export default SendBox;
