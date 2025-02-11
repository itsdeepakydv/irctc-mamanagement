import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const { login } = useAuth(); // Get login function from AuthContext
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
                mode: "cors",
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token); // Store token
                login(data.token); // Update AuthContext state
                alert("Login Successful");
                navigate("/dashboard"); // Redirect to Dashboard
            } else {
                alert(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
