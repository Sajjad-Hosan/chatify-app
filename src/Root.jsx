import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <>
      <div className="font-noto">
        <Outlet />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default Root;
