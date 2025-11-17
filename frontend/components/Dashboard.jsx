"use client";
import React, { useState } from 'react';
import OwnerDashboard from './OwnerDashboard';
import RenterDashboard from './RenterDashboard';
import DashboardSettings from './DashboardSettings';

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

