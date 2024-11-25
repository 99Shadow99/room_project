import React from 'react';

function Offer() {
    return (
        <div className="max-w-7xl mx-auto p-8 w-full">
            <h1 className="text-5xl font-bold mb-4 text-center">Offer a Room</h1>
            <p className="mb-6 text-center text-gray-700 text-lg">This page will help you list your room for rent and connect with potential renters easily.</p>
            
            <section className="mb-10 text-center max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-2">List Your Room and Start Earning!</h2>
                <p className="text-gray-600 mb-4">Emphasizing ease, trust, and exposure.</p>
                <img className="w-full h-64 object-cover rounded-lg mb-4" src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Happy hosts" />
                <p className="text-gray-600 mb-4 text-lg">Join our community of successful hosts and start earning today!</p>
                <img className="w-full h-64 object-cover rounded-lg mb-4" src="https://plus.unsplash.com/premium_photo-1676320514018-ec119b57dbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8fDA%3D" alt="Room listing" />
                <p className="text-gray-600 mb-4 text-lg">We provide you with the tools and support to make your listing stand out.</p>
                <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">Start Listing Your Room</button>
                <button className="mt-4 ml-4 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-200">Learn More</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">Why List With Us</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Increased visibility on the platform.</li>
                    <li>Easy and secure listing process.</li>
                    <li>Verified renters for trust and safety.</li>
                </ul>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Get Started</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">How It Works</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Sign up or log in.</li>
                    <li>Add room details, including photos/videos, pricing, and amenities.</li>
                    <li>Communicate with potential renters.</li>
                    <li>Finalize bookings and secure payments.</li>
                </ol>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">See Detailed Steps</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">Features</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>High-quality photo and video uploads.</li>
                    <li>Real-time chat for communication.</li>
                    <li>Analytics dashboard for tracking inquiries and views.</li>
                    <li>Custom pricing and availability settings.</li>
                </ul>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Explore Features</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">Success Stories</h2>
                <p className="text-lg text-left">Hear from our satisfied users who have successfully rented out their rooms.</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Read Testimonials</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">Trust & Safety</h2>
                <p className="text-lg text-left">We prioritize your safety with our comprehensive measures.</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Learn About Safety</button>
            </section>

            <section className="mb-10">
                <h2 className="text-4xl font-semibold mb-4 text-left">FAQs</h2>
                <p className="text-lg text-left">Find answers to common questions for room listers.</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">View FAQs</button>
            </section>

            <section className="mb-10 text-center">
                <h2 className="text-3xl font-semibold mb-4">Join thousands of successful hosts today!</h2>
                <button className="mt-4 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200">Start Listing Now</button>
                <button className="mt-4 ml-4 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-200">Contact Support</button>
            </section>
        </div>
    );
}


export default Offer; 