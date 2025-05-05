import { useEffect, useState } from "react";
import tripsData from "../data/trips.json";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("q")?.toLowerCase() || "";
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filters, setFilters] = useState({ maxPrice: "", duration: "" });

  useEffect(() => {
    const filtered = tripsData.filter((trip) => {
      const matchesSearch = trip.destination.toLowerCase().includes(searchTerm);
      const matchesPrice = filters.maxPrice ? parseInt(trip.price) <= parseInt(filters.maxPrice) : true;
      const matchesDuration = filters.duration ? trip.duration.includes(filters.duration) : true;
      return matchesSearch && matchesPrice && matchesDuration;
    });

    setFilteredTrips(filtered);
  }, [searchTerm, filters]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Search Results for "{searchTerm}"</h1>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap mb-6">
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <select
          className="border p-2 rounded"
          value={filters.duration}
          onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
        >
          <option value="">All Durations</option>
          <option value="5 days">5 days</option>
          <option value="7 days">7 days</option>
        </select>
      </div>

      {/* Trip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map((trip) => (
          <motion.div
            key={trip.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            onClick={() => window.location.href = `/trip/${trip.id}`}
          >
            <img src={trip.images[0]} alt={trip.destination} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{trip.destination}</h2>
              <p className="text-gray-600">{trip.duration} • ${trip.price}</p>
              <p className="text-sm text-yellow-500">⭐ {trip.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <p className="text-gray-500 mt-6">No trips match your criteria.</p>
      )}
    </div>
  );
}
