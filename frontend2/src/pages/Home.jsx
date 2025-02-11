import { useState, useEffect } from "react";
import axios from "axios";
import TrainCard from "../components/TrainCard";

const Home = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/train/availability?source=Mumbai&destination=Delhi`);
      setTrains(response.data);
    };
    fetchTrains();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Available Trains</h2>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default Home;
