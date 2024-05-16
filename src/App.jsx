// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import TopSeller from './components/TopSeller/TopSeller';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import SearchResults from './components/SearchResults/SearchResults'; // Import the SearchResults component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/featured-products" element={<FeaturedProducts />} />
        <Route path="/top-seller" element={<TopSeller />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search/:query" element={<SearchResults />} /> {/* Define the route for the search results page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
