import { useState } from "react";
import { Logo } from "../../assets";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = () => {
        console.log("Login");
    };

    return (
        (<div className="relative z-[2] flex flex-col justify-center items-center gap-4 w-full ">
            <div>
                <Link
                    to='/'
                >
                    <img src={Logo} alt="Logo" className="w-12 h-12" /></Link>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Create an account</h1>
                <p className="text-textSecondary text-center">Let&#39;s create your account</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-3/4 sm:w-1/2 lg:w-3/5 md:w-4/5 ">
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
                    className="w-full bg-bgBrand text-white py-2 rounded-lg font-semibold"
                >
                    Get Started
                </button>

                <button className="w-full bg-white border border-borderPrimary text-textSecondary py-2 rounded-lg font-medium">
                    <img alt="google" src="https://img.icons8.com/?size=48&id=17949&format=png" className="w-6 h-6 mr-2 inline-block" />
                    Continue with Google
                </button>
                <div className="flex flex-row justify-center items-center gap-2 text-sm">
                    <p className="text-textSecondary">Already have an account?</p>
                    <Link to='/login' className="text-textBrand font-semibold">Login</Link>
                </div>

            </div>
        </div>)
    );
};

export default Register;
