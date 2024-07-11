import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LineBG, bgLoginRegister } from "../../assets";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isLogin, setIsLogin] = useState(path == "/login" ? true : false);

  useEffect(() => {
    setIsLogin(path == "/login" ? true : false);
  }, [path, isLogin]);

  return (
    <div className="h-screen w-screen bg-bgPrimary">
      {/* Biggest Screen */}
      <div className="relative hidden h-full w-full overflow-hidden md:flex">
        <motion.div
          initial={{ x: isLogin ? "-100%" : "-100%" }}
          animate={{ x: isLogin ? "-100%" : "0%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="flex w-1/2 items-center justify-center"
        >
          <div className="absolute inset-0 z-[1]">
            <LineBG />
          </div>
          <Register />
        </motion.div>
        <motion.div
          initial={{ x: isLogin ? "100%" : "0%" }}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="absolute z-10 h-full w-1/2"
        >
          <img
            src={bgLoginRegister}
            alt="bgLoginRegister"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: isLogin ? "100%" : "100%" }}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="flex w-1/2 items-center justify-center"
        >
          <div className="absolute inset-0 z-[1]">
            <LineBG />
          </div>
          <Login />
        </motion.div>
      </div>

      {/* Smallest Screen */}
      <div className="relative flex h-full w-full overflow-hidden md:hidden">
        <div className="absolute inset-0 z-[1]">
          <LineBG />
        </div>
        <motion.div
          initial={{ x: isLogin ? "-100%" : "-100%" }}
          animate={{ x: isLogin ? "-100%" : "0%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="absolute z-10 flex h-full w-full items-center justify-center"
        >
          <Register />
        </motion.div>
        <motion.div
          initial={{ x: isLogin ? "100%" : "100%" }}
          animate={{ x: isLogin ? "0%" : "100%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="absolute z-10 flex h-full w-full items-center justify-center"
        >
          <Login />
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
