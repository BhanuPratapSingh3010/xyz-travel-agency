import tripsData from "../data/trips.json";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) navigate(`/search?query=${query}`);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Vacation</h1>
          <form onSubmit={handleSearch} className="mt-6">
            <input
              name="search"
              placeholder="Search destinations..."
              className="px-4 py-2 w-72 md:w-96 rounded-l-xl text-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-xl text-white"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Featured Trips */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tripsData.map((trip) => (
            <div
              key={trip.id}
              onClick={() => navigate(`/trip/${trip.id}`)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-[1.02]"
            >
              <img
                src={trip.images[0]}
                alt={trip.destination}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{trip.destination}</h3>
                <p className="text-gray-500">{trip.duration} • ${trip.price}</p>
                <p className="text-yellow-500">⭐ {trip.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
