import React, { useState } from 'react';

const Availability = () => {
  const [search, setSearch] = useState({ source: '', destination: '' });
  const [trains, setTrains] = useState([]);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/availability?source=${search.source}&destination=${search.destination}`);
      const data = await response.json();
      if (response.ok) {
        setTrains(data.trains);
      } else {
        alert('No trains available');
      }
    } catch (error) {
      alert('Error fetching trains');
    }
  };

  return (
    <div>
      <h2>Check Train Availability</h2>
      <input type="text" name="source" placeholder="Source" onChange={handleChange} required />
      <input type="text" name="destination" placeholder="Destination" onChange={handleChange} required />
      <button onClick={handleSearch}>Search</button>

      {trains.length > 0 && (
        <ul>
          {trains.map((train) => (
            <li key={train.trainNumber}>
              Train {train.trainNumber} - Available Seats: {train.availableSeats}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Availability;
