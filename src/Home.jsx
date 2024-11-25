import React from 'react';

// ... existing imports ...

function Home() {
    return (
        <div>
          

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhlcm98ZW58MHx8fHwxNjYyMjY0MjA0&ixlib=rb-1.2.1&q=80&w=1080)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Room or List Yours in Minutes!</h1>
          <div>
            <a href="#rent">
              <button className="bg-blue-500 text-white px-6 py-3 mr-4 rounded">Rent a Room</button>
            </a>
            <a href="#offer">
              <button className="bg-green-500 text-white px-6 py-3 rounded">Offer a Room</button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-8 bg-gray-100" id="how-it-works">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search" className="mb-2" />
            <h3 className="font-semibold">1. Search for Rooms</h3>
            <p>Find the perfect room that fits your needs.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/user-group.png" alt="Connect" className="mb-2" />
            <h3 className="font-semibold">2. Connect with Verified Users</h3>
            <p>Communicate with landlords or renters directly.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/checkmark.png" alt="Finalize" className="mb-2" />
            <h3 className="font-semibold">3. Finalize the Deal Securely</h3>
            <p>Complete your transaction with confidence.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/filter.png" alt="Filters" className="mr-2" />
            <p>Easy-to-use search filters</p>
          </div>
          <div className="flex items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure Payment" className="mr-2" />
            <p>Secure payment options</p>
          </div>
          <div className="flex items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/shield.png" alt="Verified Users" className="mr-2" />
            <p>Verified users and listings</p>
          </div>
        </div>
        <a href="/features" className="text-blue-500 mt-4 inline-block">Learn More</a>
      </section>

      {/* Rent a Room Section */}
      <section id="rent" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Looking for a Room?</h2>
        <p className="mb-4">Browse rooms to rent easily by location, budget, and preferences. Our platform makes it simple to find the perfect space for you.</p>
        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Room" className="mb-4 rounded shadow-lg" />
        <a href="/rent" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">Start Your Search</a>
      </section>

      {/* Offer a Room Section */}
      <section id="offer" className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">Have a Room to Offer?</h2>
        <p className="mb-4">List your rooms easily with benefits like wide visibility and secure processes. Join our community of satisfied homeowners.</p>
        <img src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Offer Room" className="mb-4 rounded shadow-lg" />
        <a href="/offer" className="bg-green-500 text-white px-4 py-2 mt-4 inline-block rounded">List Your Room</a>
      </section>

      {/* Testimonials/Reviews Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <div className="border p-4 rounded shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="mb-2 rounded-full w-16 h-16" />
            <p>"This platform made finding a room so easy!"</p>
          </div>
          <div className="border p-4 rounded shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 2" className="mb-2 rounded-full w-16 h-16" />
            <p>"I was able to list my room in minutes!"</p>
          </div>
          <div className="border p-4 rounded shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 3" className="mb-2 rounded-full w-16 h-16" />
            <p>"Great experience with secure transactions!"</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">Trust Us</h2>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">10,000+ Rooms Listed</h3>
            <img src="https://img.icons8.com/ios-filled/50/000000/checked.png" alt="Rooms Listed" className="mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">Verified by Experts</h3>
            <img src="https://img.icons8.com/ios-filled/50/000000/certificate.png" alt="Verified" className="mt-2" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
        <form className="mt-4">
          <input type="email" placeholder="Subscribe to our newsletter" className="p-2 rounded-l" />
          <button type="submit" className="bg-blue-500 p-2 rounded-r">Subscribe</button>
        </form>
      </footer>

        </div>
    );
}

// ... existing code ...

export default Home; 
