import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">🚆 IRCTC Booking</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/login" className="px-4">Login</Link>
        <Link to="/register" className="px-4">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
