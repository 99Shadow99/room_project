import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Rent from './Rent';
import Offer from './Offer';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <nav className="bg-gray-800 p-4">
                    <ul className="flex space-x-4 text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rent">Rent Rooms</Link></li>
                        <li><Link to="/offer">Offer Rooms</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rent" element={<Rent />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
