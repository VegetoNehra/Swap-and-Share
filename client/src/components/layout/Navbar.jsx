// src/components/layout/navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Swap&Share
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600">Inventory</Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell/Donate</Link>
            <Link to="/my-listings" className="text-gray-700 hover:text-blue-600"> My Listings</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user.profile_picture}
                  alt={user.username}
                  className="h-8 w-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              
            )}
             
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;