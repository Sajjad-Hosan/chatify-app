import MessageBoxOptions from "../MessageBoxOptions/MessageBoxOptions";

const SendBox = () => {
  return (
    <>
      <div className="card flex flex-col p-2 w-[400px] bg-gray-800">
        <div className="flex justify-between gap-2">
          <div className="flex items-end gap-2">
            <img src="" alt="" className="w-8 h-8 avatar rounded-full" />
            <p className="mt-2 text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              eligendi totam amet perspiciatis enim iste deserunt modi ab
              laboriosam accusantium!
            </p>
          </div>
          <MessageBoxOptions />
        </div>
      </div>
    </>
  );
};
export default SendBox;
