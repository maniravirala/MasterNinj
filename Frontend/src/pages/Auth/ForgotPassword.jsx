import { ArrowLeft, Key } from "iconsax-react";
import Input from '../../components/Input';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LineBG } from '../../assets';
import { motion } from 'framer-motion';
import { BiMailSend } from "react-icons/bi";
import { useFetch } from '../../hooks';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(60);
    const [requestConfig, setRequestConfig] = useState(null);
    
    const { data, error } = useFetch(requestConfig);

    useEffect(() => {
        if (data) {
            setMessage(data.message);
            setIsSubmitted(true);
        }
        if (error) {
            setMessage('Failed to send reset instructions. Please try again.');
        }
    }, [data, error]);

    const handleForgotPassword = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setRequestConfig({
                url: 'https://run.mocky.io/v3/35b3fd35-b477-4896-945e-47809ec4bbeb',
                method: 'POST',
                data: { email }
            });
        } else {
            setMessage('Invalid Email');
        }
    };

    const handleSubmit = () => {
        handleForgotPassword(email);
    };

    const handleResend = () => {
        setRequestConfig({
            url: 'https://run.mocky.io/v3/35b3fd35-b477-4896-945e-47809ec4bbeb',
            method: 'POST',
            data: { email }
        });
        setTime(60);
    };

    useEffect(() => {
        let interval;
        if (time > 0 && isSubmitted) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [time, isSubmitted]);

    return (
        <div className="h-screen w-screen relative">
            <div className="absolute inset-0 z-[1]">
                <LineBG />
            </div>
            <div className="h-full w-full flex flex-col gap-4 justify-center items-center bg-bgPrimary">
                <div className="relative z-[2] h-full w-full flex flex-col gap-3 justify-center items-center">
                    {!isSubmitted ? (
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <div className="p-2 border border-borderPrimary rounded-lg bg-bgSecondary shadow-md">
                                <Key size={24} />
                            </div>
                            <h1 className="text-3xl font-bold">Forgot Password</h1>
                            <p className="text-sm text-textSecondary">No worries, we&#39;ll send you reset instructions</p>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <div className="p-2 border border-borderPrimary rounded-lg bg-bgSecondary shadow-md">
                                    <BiMailSend size={24} />
                                </div>
                                <h1 className="text-3xl font-bold">Check Your Email</h1>
                                <p className="text-sm text-textSecondary">{message}</p>
                            </div>
                        </motion.div>
                    )}
                    {!isSubmitted ? (
                        <div className="flex flex-col justify-center items-center gap-3 mt-4 w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3">
                            <Input
                                type='email'
                                name="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                labelPlaceholder="Email"
                            />
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-textBrand text-white py-2 rounded-lg font-semibold"
                            >
                                Reset Password
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-3 mt-4 w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3">
                            <button
                                className="w-full bg-textBrand text-white py-2 rounded-lg font-semibold"
                            >
                                Open Email App
                            </button>
                            <div className="flex flex-row justify-center items-center gap-2 text-sm">
                                <p className="text-textSecondary">Didn&#39;t Receive the email?</p>
                                <button
                                    className="text-textBrand font-semibold"
                                    onClick={handleResend}
                                    disabled={time > 0}
                                >
                                    Resend {time > 0 ? `(${time}s)` : ''}
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col justify-center items-center mt-4">
                        <Link
                            to='/login'
                            className="text-textTertiary text-sm font-semibold flex gap-2 justify-center items-center">
                            <ArrowLeft size={20} />
                            Back to login
                        </Link>
                    </div>
                    {message && !isSubmitted && (
                        <div className="text-red-500 mt-2">{message}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
