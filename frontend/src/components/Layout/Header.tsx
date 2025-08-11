import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, MenuIcon, SearchIcon, XIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isAuthenticated
  } = useAuth();
  const {
    itemCount
  } = useCart();
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-black">
              FM SPORTS
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-black font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-black font-medium">
              Shop
            </Link>
            <Link to="/lookbook" className="text-gray-800 hover:text-black font-medium">
              Lookbook
            </Link>
            <Link to="/order-info" className="text-gray-800 hover:text-black font-medium">
              Order Info
            </Link>
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2" aria-label="Search">
              <SearchIcon size={20} />
            </button>
            <Link to={isAuthenticated ? '/account' : '/login'} className="p-2" aria-label="Account">
              <UserIcon size={20} />
            </Link>
            <Link to="/cart" className="p-2 relative" aria-label="Shopping cart">
              <ShoppingBagIcon size={20} />
              {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>}
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-black font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="text-gray-800 hover:text-black font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/lookbook" className="text-gray-800 hover:text-black font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Lookbook
              </Link>
              <Link to="/order-info" className="text-gray-800 hover:text-black font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                Order Info
              </Link>
              <Link to={isAuthenticated ? '/account' : '/login'} className="text-gray-800 hover:text-black font-medium px-2" onClick={() => setIsMenuOpen(false)}>
                {isAuthenticated ? 'My Account' : 'Sign In'}
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;