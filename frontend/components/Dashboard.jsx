"use client";
import React, { useState } from 'react';
import OwnerDashboard from '../components/OwnerDashboard';
import RenterDashboard from '../components/RenterDashboard';
import DashboardSettings from '../components/DashboardSettings';
import DisputeForm from '../components/DisputeForm';
import DisputeHistory from '../components/DisputeHistory';

const Dashboard = ({ role = 'owner' }) => {
  const [activeTab, setActiveTab] = useState('summary');

return (
  <div className="min-h-screen bg-nougat text-carbon p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Equiply Pro Dashboard</h1>

    {/* Tab Menu */}
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setActiveTab('summary')}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === 'summary' ? 'bg-saffron text-white' : 'bg-white text-carbon'
        }`}
      >
        Summary
      </button>
      <button
        onClick={() => setActiveTab('settings')}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === 'settings' ? 'bg-saffron text-white' : 'bg-white text-carbon'
        }`}
      >
        Account Settings
      </button>
      <button
        onClick={() => setActiveTab('dispute')}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === 'dispute' ? 'bg-saffron text-white' : 'bg-white text-carbon'
        }`}
      >
        Raise Dispute
      </button>
      <button
        onClick={() => setActiveTab('history')}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === 'history' ? 'bg-saffron text-white' : 'bg-white text-carbon'
        }`}
      >
        Dispute History
      </button>
    </div>

    {/* Tab Content */}
    {activeTab === 'summary' ? (
      role === 'owner' ? <OwnerDashboard /> : <RenterDashboard />
    ) : (
      <DashboardSettings role={role} />
    )}
  </div>
);
};

export default Dashboard;

