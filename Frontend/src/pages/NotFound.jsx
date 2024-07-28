import { NotFoundSvg } from "../assets";
import Image from "../components/Image";
import Button from "../components/Buttons/Button";
import { ArrowLeft } from "iconsax-react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-evenly items-center md:px-32 px-4">
            <div className="flex md:flex-row flex-col-reverse md:justify-between justify-evenly items-center w-full h-full ">
                <div className="flex flex-col items-start gap-4">
                    <span className="font-semibold text-brand-700">404 error</span>
                    <span className="text-5xl font-semibold">Page not found</span>
                    <div className="flex flex-col">
                        <span className="text-textTertiary">Sorry, the page you are looking for doesn't exist.</span>
                        <span className="text-textTertiary">Here are some helpful links instead:</span>
                    </div>
                    <div className="flex justify-between gap-4 mt-6">
                        <Button onClick={() => history.back()} className="text-sm whitespace-nowrap flex items-center justify-center" variant="outline">
                            <ArrowLeft className="mb-0.5 mr-1 size-5" />
                            Go Back
                        </Button>
                        <Link to='/' >
                            <Button className="text-sm whitespace-nowrap">Take me Home</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={NotFoundSvg} alt="404" />
                </div>
            </div>
            <footer className="mt-auto text-center py-5">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-500">© All Rights Reserved. 2024.</p>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;