import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`, formData);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="w-96 p-6 bg-white shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-2 border" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
