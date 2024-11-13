import MessageBoxOptions from "../MessageBoxOptions/MessageBoxOptions";
const SendBox = ({ msg }) => {
  const { message, time, image } = msg;
  return (
    <>
      <div className="card flex flex-col p-2 w-[400px] bg-neutral">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-3">
            <p className="mt-2 text-sm px-2">{message}</p>
            <div className="flex justify-between items-end gap-2">
              <img
                src={image}
                alt=""
                className="w-6 h-6 avatar rounded-full object-contain"
              />
              <p className="text-[10px] ml-auto">{time}</p>
            </div>
          </div>
          <MessageBoxOptions />
        </div>
      </div>
    </>
  );
};
export default SendBox;
