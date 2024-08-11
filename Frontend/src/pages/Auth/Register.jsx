import { useState } from "react";
import { Logo } from "../../assets";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Google from "../../components/Buttons/Google";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    return passwordRegex.test(password);
  }

  const passwordError = (password) => {
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const lowercaseRegex = /^(?=.*[a-z])/;
    const numberRegex = /^(?=.*\d)/;
    const lengthRegex = /^.{8,}$/;
    const specialCharRegex = /^(?=.*[!@#\$%\^&\*])/;
    
    const uppercase = uppercaseRegex.test(password);
    const lowercase = lowercaseRegex.test(password);
    const number = numberRegex.test(password);
    const length = lengthRegex.test(password);
    const specialChar = specialCharRegex.test(password);

    return 'Password must contain at least' + (uppercase ? '' : ', 1 uppercase letter') + (lowercase ? '' : ', 1 lowercase letter') + (number ? '' : ', 1 number') + (length ? '' : ', 8 characters') + (specialChar ? '' : ', 1 special character'); 
  }

  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    try {
      if (!formData.name || !formData.email || !formData.password) {
        return toast.error("Please fill in all fields");
      }
      if (!isPasswordValid(formData.password)) {
        return toast.error(passwordError(formData.password));
      }
      toast.promise(register(formData), {
        loading: "Loading...",
        success: (data) => {
          return data.message;
        },
        error: (data) => {
          return data.message;
        },
      });
    } catch (error) {
      console.error("Register failed:", error);
      toast.error("Register failed");
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
        <h1 className="text-3xl font-semibold">Create an account</h1>
        <p className="text-center text-textSecondary">
          Let&#39;s create your account
        </p>
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center gap-5 sm:w-1/2 md:w-4/5 lg:w-3/5">
        <Input
          type="text"
          labelPlaceholder="Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />

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

        <button
          onClick={handleRegister}
          className="w-full rounded-lg bg-bgBrand py-2 font-semibold text-white"
        >
          Get Started
        </button>

        <Google />
        <div className="flex flex-row items-center justify-center gap-2 text-sm">
          <p className="text-textSecondary">Already have an account?</p>
          <Link to="/login" className="font-semibold text-textBrand">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
