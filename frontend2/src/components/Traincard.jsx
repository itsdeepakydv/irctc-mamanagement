const TrainCard = ({ train }) => {
    return (
      <div className="p-4 bg-gray-100 rounded shadow-md mb-4">
        <h3 className="text-xl font-bold">{train.train_number}</h3>
        <p>Route: {train.source} ➝ {train.destination}</p>
        <p>Available Seats: {train.available_seats}</p>
      </div>
    );
  };
  
  export default TrainCard;
  