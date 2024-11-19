import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";

import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //
  const [users, setUsers] = useState([]);
  const [requesters, setRequesters] = useState([]);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  // chats
  const [id, setId] = useState("");
  const [chatUser, setChatUser] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
      localStorage.setItem("token", current?.getIdToken);
      axiosPublic.get(`/user?email=${current?.email}`).then((res) => {
        setData(res.data);
        axiosPublic.get(`/requester/${res.data?._id}`).then((res2) => {
          setRequesters(res2.data);
        });
      });
      axiosPublic.get("/users").then((res) => {
        const currData = [...res.data];
        const filterData = currData.filter((e) => e?.email !== current?.email);
        setUsers(filterData);
      });

      axiosPublic.get("/groups").then((res) => {
        setGroups(res.data);
      });
      //
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    socket.emit("addUser", data._id);
    socket.on("getUsers", (users) => {});
  }, [data._id]);

  useEffect(() => {
    socket.off("getMessage");
    socket.on("getMessage", (msgData) => {
      setChats((prev) => [...prev, msgData]);
    });
    return () => socket.off("getMessage");
  }, []);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignOut = () => {
    return signOut(auth);
  };
  const handlePopUpSign = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const handleGoogle = () => handlePopUpSign(googleProvider);

  const contextValues = {
    users,
    requesters,
    user,
    groups,
    data,
    loading,
    chats,
    setChats,
    chatUser,
    setChatUser,
    id,
    setId,
    createNewUser,
    handleLoginUser,
    handleSignOut,
    handleGoogle,
  };
  //
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
