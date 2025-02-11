import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, formData);
      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="w-96 p-6 bg-white shadow-md">
        <h2 className="text-2xl mb-4">Register</h2>
        <input name="name" type="text" placeholder="Name" className="w-full p-2 mb-2 border" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-2 border" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
