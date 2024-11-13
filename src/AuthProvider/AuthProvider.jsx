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

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      console.log(current);
      setUser(current);
      setLoading(false);
      axiosPublic.get(`/user?email=${current?.email}`).then((res) => {
        console.log("DB DATA", res.data);
        setData(res.data);
      });
    });
    return () => unSubscribe();
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
    user,
    data,
    loading,
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
