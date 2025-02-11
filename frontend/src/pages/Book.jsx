import { useState } from "react";

const Book = () => {
    const [trainId, setTrainId] = useState("");
    const [seatsToBook, setSeatsToBook] = useState("");
    const [message, setMessage] = useState("");

    const handleBooking = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const token = localStorage.getItem("token");
            console.log(trainId);
            const response = await fetch("http://localhost:3001/user/book", {
                method: "POST",
                headers: { Authorization: token },
                body: { trainId, seatsToBook },
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error(error);
            setMessage("Error booking seats");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Book a Train</h2>
            <form onSubmit={handleBooking}>
                <label className="block mb-2">
                    Train ID:
                    <input
                        type="text"
                        value={trainId}
                        onChange={(e) => setTrainId(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </label>
                <label className="block mb-2">
                    Seats to Book:
                    <input
                        type="number"
                        value={seatsToBook}
                        onChange={(e) => setSeatsToBook(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Book Seats
                </button>
            </form>
            {message && (
                <p className="mt-4 text-center text-red-500">{message}</p>
            )}
        </div>
    );
};

export default Book;
