const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} StudentHelper. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
