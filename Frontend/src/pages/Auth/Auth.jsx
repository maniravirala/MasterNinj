import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LineBG, bgLoginRegister } from "../../assets";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isLogin, setIsLogin] = useState(
    path == '/login' ? true : false
  )

  useEffect(() => {
    setIsLogin(path == '/login' ? true : false)
  }, [path, isLogin])

  return (
    <div className="bg-bgPrimary w-screen h-screen">
      {/* Biggest Screen */}
      <div className="md:flex hidden w-full overflow-hidden relative h-full">
        <motion.div
          initial={{ x: isLogin ? '-100%' : '-100%' }}
          animate={{ x: isLogin ? '-100%' : '0%' }}
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-center items-center"
        >
          <div className="absolute inset-0 z-[1]">
            <LineBG />
          </div>
          <Register />
        </motion.div>
        <motion.div
          initial={{ x: isLogin ? '100%' : '0%' }}
          animate={{ x: isLogin ? '0%' : '100%' }}
          transition={{ duration: 1 }}
          className="w-1/2 h-full absolute z-10"
        >
          <img src={bgLoginRegister} alt="bgLoginRegister" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ x: isLogin ? '100%' : '100%' }}
          animate={{ x: isLogin ? '0%' : '100%' }}
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-center items-center"
        >
          <div className="absolute inset-0 z-[1]">
            <LineBG />
          </div>
          <Login />
        </motion.div>

      </div>

      {/* Smallest Screen */}
      <div className="md:hidden flex w-full h-full relative overflow-hidden">
        <div className="absolute inset-0 z-[1]">
          <LineBG />
        </div>
        <motion.div
          initial={{ x: isLogin ? '-100%' : '-100%' }}
          animate={{ x: isLogin ? '-100%' : '0%' }}
          transition={{ duration: 1 }}
          className="w-full h-full flex justify-center items-center absolute z-10 "
        >

          <Register />
        </motion.div><motion.div
          initial={{ x: isLogin ? '100%' : '100%' }}
          animate={{ x: isLogin ? '0%' : '100%' }}
          transition={{ duration: 1 }}
          className="w-full h-full flex justify-center items-center absolute z-10 "
        >
          <Login />
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
