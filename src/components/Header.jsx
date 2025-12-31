import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const fromApp = location.state?.fromApp === true;
console.log(location.state);
  const isServiceDetail = location.pathname.startsWith("/service/");
  const isBookingPage = location.pathname.startsWith("/book/");
  const showBack = fromApp && (isServiceDetail || isBookingPage);
  const hideMenu = fromApp && (isServiceDetail || isBookingPage);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Left: Back + Logo */}
          <div className="flex items-center gap-3">

            {/* Back Button */}
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                aria-label="Go back"
              >
                ←
              </button>
            )}

            {/* Logo */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-extrabold tracking-tight"
            >
              <span className="text-black">Doon</span>
              <span className="text-green-500">Fix</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          {!hideMenu && (
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-base">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <Link to="/services" className="hover:text-green-600">Services</Link>
                          <Link to="/about" className="hover:text-green-600">About us</Link>
                          <Link to="/contact" className="hover:text-green-600">Contact us</Link>

            </nav>
          )}

          {/* Right Actions */}
          {!hideMenu && (
            <div className="flex items-center gap-3">

              {/* Book Button (Desktop) */}
              <button className="relative overflow-hidden hidden sm:inline-flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600">
                Book Now
                  <span className="shine-layer"></span>

              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {!hideMenu && menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4 text-md font-bold">
              <Link to="/" className="hover:text-green-600"onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/services" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link to="/about" className="hover:text-green-600"onClick={() => setMenuOpen(false)}>About us</Link>
              <Link to="/contact" className="hover:text-green-600"onClick={() => setMenuOpen(false)}>Contact us</Link>

              {!(isServiceDetail || isBookingPage) && (
                <button onClick={() =>   navigate("/book")} className="relative overflow-hidden mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                Book Now
                                  <span className="shine-layer"></span>

              </button>
              
              )}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
