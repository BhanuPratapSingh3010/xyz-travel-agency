import { useParams, useNavigate } from "react-router-dom";
import trips from "../data/trips.json";

export default function TripDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) return <div className="p-6">Trip not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header image carousel */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {trip.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Trip to ${trip.destination}`}
            className="rounded-xl w-full h-64 object-cover"
          />
        ))}
      </div>

      {/* Title + Pricing */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{trip.destination}</h1>
        <p className="text-xl text-gray-600 mt-2">
          Duration: {trip.duration} • <span className="text-green-600 font-semibold">${trip.price}</span>
        </p>
        <p className="text-yellow-500 text-lg mt-1">⭐ {trip.rating} / 5</p>
      </div>

      {/* Itinerary */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Itinerary</h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
          {trip.itinerary.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-10 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md"
      >
        ← Back to Trips
      </button>
    </div>
  );
}
