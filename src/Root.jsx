import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="font-noto">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
