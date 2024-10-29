const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-900 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sean Dundon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
