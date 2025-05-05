import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🌍 XYZ Travel
        </Link>

        <div className="space-x-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600 font-medium`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`${
              location.pathname.startsWith("/search")
                ? "text-blue-600"
                : "text-gray-700"
            } hover:text-blue-600 font-medium`}
          >
            Trips
          </Link>
        </div>
      </div>
    </nav>
  );
}
