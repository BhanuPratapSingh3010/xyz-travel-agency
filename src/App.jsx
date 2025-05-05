import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import TripDetails from "./pages/TripDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
