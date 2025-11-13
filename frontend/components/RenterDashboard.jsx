import React from 'react';

const RenterDashboard = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-xl font-semibold mb-2">Renter Summary</h2>
      <div className="p-4 bg-white rounded-lg shadow border border-rust">
        <p className="text-sm">Total Rentals: 4</p>
        <p className="text-sm">Average Rating: 5.0</p>
        <p className="text-sm">Location: Sheffield</p>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Previously Rented Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow border border-rust">
          <h3 className="font-bold text-lg">DJI Drone</h3>
          <p className="text-sm">Owner: Alex</p>
          <p className="text-sm">Rating: ★★★★★</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Messages</h2>
      <div className="p-4 bg-white rounded-lg shadow border border-rust">
        <p className="text-sm">📩 1 new message from owner</p>
      </div>
    </section>
  </div>
);

export default RenterDashboard;

