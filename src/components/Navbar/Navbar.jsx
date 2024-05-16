import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
// import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const [searchQuery, setSearchQuery] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.trim() !== '') {
  //     navigate.push(`/search/${searchQuery}`);
  //   }
  // };

  return (
    <nav className="navbar">
      <div className="logo-div">
        <Link to="/" className="logo">
          <img src={logo} alt="Stationary Shop Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        
        <li>
          <Link to="/top-seller">Top Seller</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
  <a href="https://github.com/Aayushsah6969" target="_blank" rel="noopener noreferrer">Developers</a>
</li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="search-bar">
      <form  >
        <input
          type="search"
          placeholder="Search products..."
        />
        <Link to={`/search `}>
          <button>
            <i className="fas fa-search" />
          </button>
        </Link>
      </form>
    </div>

      {/* Burger Menu */}
      <div className={`burger-menu ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/featured-products">Featured Products</Link>
          </li>
          <li>
            <Link to="/top-seller">Top Seller</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Close Button */}
        {/* <div className="close-btn" onClick={toggleSidebar}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
