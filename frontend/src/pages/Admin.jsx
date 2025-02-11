import { useState } from "react";

const Admin = () => {
    const [train, setTrain] = useState({
        trainNumber: "",
        source: "",
        destination: "",
        totalSeats: "",
    });

    const handleChange = (e) => {
        setTrain({ ...train, [e.target.name]: e.target.value });
    };

    const handleAddTrain = async () => {
        const apiKey = "my_secret_api_key_456";
        const response = await fetch("http://localhost:3001/admin/addTrain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
            body: JSON.stringify(train),
            mode: "cors",
        });

        if (response.ok) {
            alert("Train added successfully");
        } else {
            alert("Error adding train");
        }
    };

    return (
        <div>
            <h2>Admin Panel - Add Train</h2>
            <input
                type="text"
                name="trainNumber"
                placeholder="Train Number"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="source"
                placeholder="Source"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="destination"
                placeholder="Destination"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="totalSeats"
                placeholder="Total Seats"
                onChange={handleChange}
                required
            />
            <button onClick={handleAddTrain}>Add Train</button>
        </div>
    );
};

export default Admin;
