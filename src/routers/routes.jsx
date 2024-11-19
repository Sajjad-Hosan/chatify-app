import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import ChatPage from "../pages/ChatPage/ChatPage";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineGroupAdd } from "react-icons/md";
import ChatHome from "../pages/ChatPage/ChatHome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Root />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/chat",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
          children: [
            {
              path: "/chat",
              element: (
                <PrivateRoute>
                  <ChatHome />
                </PrivateRoute>
              ),
            },
            {
              path: "/chat/:id",
              element: (
                <PrivateRoute>
                  <ChatPage />
                </PrivateRoute>
              ),
            },
          ],
        },
        {
          path: "/update-profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ],

);

export default routes;
