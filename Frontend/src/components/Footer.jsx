const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} StudentHelper. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
