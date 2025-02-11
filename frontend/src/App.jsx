// import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Availability from "./pages/Availability";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";
import { useAuth, AuthProvider } from "./context/AuthContext";
import Book from "./pages/Book";

// app.listen(3000, () => console.log('Server running on port 3000'));

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/register" />} />{" "}
                    {/* Redirect to Register */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {/* Protected Routes */}
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/book"
                        element={
                            <PrivateRoute>
                                <Book />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/availability"
                        element={
                            <PrivateRoute>
                                <Availability />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/bookings"
                        element={
                            <PrivateRoute>
                                <Bookings />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
