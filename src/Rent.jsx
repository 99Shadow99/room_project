import React from 'react';
import 'remixicon/fonts/remixicon.css'; 
function Rent() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Rent a Room</h1>
            <p className="mb-6">This page will help you find rooms to rent, making your search easy and efficient.</p>
            
            <section className="hero bg-blue-100 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold">Find Your Perfect Space in Minutes!</h2>
                <div className="mt-4">
                    <input type="text" className="p-2 border border-gray-300 rounded w-full" placeholder="Search..." />
                    <div className="flex space-x-4 mt-4">
                        <input type="text" className="p-2 border border-gray-300 rounded" placeholder="Location" />
                        <input type="text" className="p-2 border border-gray-300 rounded" placeholder="Budget" />
                        <select className="p-2 border border-gray-300 rounded">
                            <option>Room Type</option>
                            <option>Private</option>
                            <option>Shared</option>
                        </select>
                    </div>
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cozy Room" className="mt-4 w-full h-48 object-cover rounded" />
            </section>
            
            <section className="how-it-works mb-6">
                <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="step bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">1. Search</h3>
                        <p>Find available rooms by location and budget.</p>

                        <i class="ri-search-line text-5xl mt-3"></i>
                    </div>
                    <div className="step bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">2. Browse</h3>
                        <p>Check verified listings and contact the host.</p>
                       <i class="ri-list-check text-5xl mt-3"></i>
                    </div>
                    <div className="step bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">3. Finalize</h3>
                        <p>Securely finalize the deal via our platform.</p>
                        <i class="ri-secure-payment-line text-5xl mt-3"></i>
                    </div>
                </div>
            </section>
            
            <section className="featured-rooms mb-6">
                <h2 className="text-xl font-semibold mb-2">Featured Rooms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="room-card border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-32 object-cover rounded" />
                        <h3 className="font-semibold">Cozy Private Room</h3>
                        <p>Location: Downtown, Price: $750/month</p>
                        <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">View More</button>
                    </div>
                    <div className="room-card border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shared Room" className="w-full h-32 object-cover rounded" />
                        <h3 className="font-semibold">Shared Room</h3>
                        <p>Location: Uptown, Price: $500/month</p>
                        <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">View More</button>
                    </div>
                </div>
            </section>
            
            <section className="key-features mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="feature bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">Verified Listings</h3>
                        <p>All listings are verified for your safety.</p>
                        
                        <i class="ri-verified-badge-line text-5xl mt-3"></i>
                    </div>
                    <div className="feature bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">Secure Payments</h3>
                        <p>Enjoy secure payment options with no hidden fees.</p>
                        <i class="ri-secure-payment-line text-5xl mt-3"></i>
                    </div>
                    <div className="feature bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold">Real-time Chat</h3>
                        <p>Communicate directly with landlords or tenants.</p>
                        <i class="ri-chat-3-line text-5xl mt-3"></i>
                    </div>
                </div>
            </section>
            
            <section className="testimonials mb-6">
                <h2 className="text-xl font-semibold mb-2">User Testimonials</h2>
                <div className="flex flex-col space-y-4">
                    <div className="testimonial bg-gray-100 p-4 rounded">
                        <p>"I found my dream room in no time! The process was so easy."</p>
                        <p className="font-semibold">- Happy Renter</p>
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-12 h-12 rounded-full mt-2" />
                    </div>
                    <div className="testimonial bg-gray-100 p-4 rounded">
                        <p>"Great experience! I loved the variety of options available."</p>
                        <p className="font-semibold">- Satisfied Tenant</p>
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-12 h-12 rounded-full mt-2" />
                    </div>
                </div>
            </section>
            
            <section className="trust-safety mb-6">
                <h2 className="text-xl font-semibold mb-2">Trust & Safety</h2>
                <ul className="list-disc pl-5">
                    <li>Verified hosts ensure a safe renting experience.</li>
                    <li>Transparent pricing with no hidden fees.</li>
                    <li>Dedicated support for conflict resolution.</li>
                </ul>
            </section>
            
            <section className="faqs mb-6">
                <h2 className="text-xl font-semibold mb-2">FAQs</h2>
                <ul className="list-disc pl-5">
                    <li>How do I know the listing is genuine?</li>
                    <li>What happens if I need to cancel?</li>
                    <li>Are there any additional fees?</li>
                    <li>How can I contact the host?</li>
                </ul>
            </section>
            
            <section className="call-to-action text-center">
                <h2 className="text-2xl font-semibold mb-4">Start Your Search Now!</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Your Search Now!</button>
            </section>
        </div>
    );
}

export default Rent; 