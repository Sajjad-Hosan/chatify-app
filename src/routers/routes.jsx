import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import ChatPage from "../pages/ChatPage/ChatPage";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineGroupAdd } from "react-icons/md";
import ChatHome from "../pages/ChatPage/ChatHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <ChatHome />,
          },
          {
            path: "/chat/:id",
            element: <ChatPage />,
          },
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/update-profile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
