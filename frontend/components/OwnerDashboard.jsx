import React from 'react';

const OwnerDashboard = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-xl font-semibold mb-2">Your Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow border border-rust">
          <h3 className="font-bold text-lg">Camera Kit</h3>
          <p className="text-sm">Location: York</p>
          <p className="text-sm">Rating: ★★★★☆</p>
          <p className="text-sm">Requests: Insurance document requested</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Seller Summary</h2>
      <div className="p-4 bg-white rounded-lg shadow border border-rust">
        <p className="text-sm">Total Listings: 5</p>
        <p className="text-sm">Average Rating: 4.6</p>
        <p className="text-sm">Active Bookings: 2</p>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Messages</h2>
      <div className="p-4 bg-white rounded-lg shadow border border-rust">
        <p className="text-sm">📩 3 unread messages from renters</p>
      </div>
    </section>
  </div>
);

export default OwnerDashboard;

