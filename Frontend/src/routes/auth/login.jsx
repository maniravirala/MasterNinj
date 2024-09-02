import { createFileRoute, Link, redirect, useLocation } from "@tanstack/react-router";
import { LineBG, Logo, bgLoginRegister } from "@/assets";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import Google from "@/components/Buttons/Google";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";


  const handleChange = (e) => {
    const { name, value, checked, type, id } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [type === "checkbox" ? id : name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async () => {
    try {
      toast.promise(login(formData), {
        loading: "Loading...",
        success: (data) => {
          redirect({ to: from });
          localStorage.setItem("token", data?.token);
          return data?.message;
        },
        error: (data) => {
          return data?.message;
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="h-screen w-screen bg-bgPrimary">
      <div className="relative hidden h-full w-full overflow-hidden md:flex">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
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
          initial={{ x: "200%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="flex w-1/2 items-center justify-center"
        >
          <div className="absolute inset-0 z-[1]">
            <LineBG />
          </div>
          <div className="relative z-[2] flex w-full flex-col items-center justify-center gap-4">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-12 w-12" />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">Welcome Back</h1>
              <p className="text-sm text-textSecondary">
                Login to your account
              </p>
            </div>
            <div className="flex w-3/4 flex-col items-center justify-center gap-5 sm:w-1/2 md:w-4/5 lg:w-3/5">
              <Input
                type="email"
                labelPlaceholder="Email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <Input
                type="password"
                labelPlaceholder="Password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                progress
                visiblePassword
              />

              <div className="flex w-full flex-row justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="rememberMe"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="select-none text-sm text-textSecondary"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-semibold text-textBrand"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                onClick={handleLogin}
                className="w-full rounded-lg bg-bgBrand py-2 font-semibold text-white"
              >
                Login
              </button>

              <Google />
              <div className="flex flex-row items-center justify-center gap-2 text-sm">
                <p className="text-textSecondary">Don&#39;t have an account?</p>
                <Link to="/auth/register" className="font-semibold text-textBrand">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/auth/login")({
  beforeLoad: async({ context, location }) => {
    const { isAuthenticated } = context.authentication;
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated) {
      throw redirect({ to: location.state?.from || '/' });
    }
  },
  component: login,
});
