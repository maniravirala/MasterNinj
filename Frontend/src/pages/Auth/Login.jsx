import { useState } from "react";
import { Logo } from "../../assets";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Google from "../../components/Buttons/Google";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { login } = useAuth();

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
          return data.message;
        },
        error: (data) => {
          return data.message;
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="relative z-[2] flex w-full flex-col items-center justify-center gap-4">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-textSecondary">Login to your account</p>
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
            to="/forgot-password"
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
          <Link to="/register" className="font-semibold text-textBrand">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
