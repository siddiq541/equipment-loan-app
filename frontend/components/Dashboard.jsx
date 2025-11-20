"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import OwnerDashboard from '../components/OwnerDashboard';
import RenterDashboard from '../components/RenterDashboard';
import DashboardSettings from '../components/DashboardSettings';
import DisputeForm from '../components/DisputeForm';
import DisputeHistory from '../components/DisputeHistory';

const Dashboard = ({ role = 'owner' }) => {
  const [activeTab, setActiveTab] = useState('summary');
  const [showDisputeForm, setShowDisputeForm] = useState(false);
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#d8b4a0] text-[#2B2B2B] font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-rust">
        <h1 className="text-2xl font-bold tracking-wide text-[#8C2F2B]">Equiply Pro Dashboard</h1>
        <div className="space-x-4">
          <button
            onClick={handleGoHome}
            className="text-[#C24C30] font-semibold hover:underline focus:outline focus:ring-2 focus:ring-[#C24C30]"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="text-[#C24C30] font-semibold hover:underline focus:outline focus:ring-2 focus:ring-[#C24C30]"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="flex justify-center gap-4 py-6 bg-[#f5eae2] border-b border-rust">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'summary'
              ? 'bg-saffron text-black'
              : 'bg-white text-black hover:bg-saffron hover:text-[#C24C30]'
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'settings'
              ? 'bg-saffron text-black'
              : 'bg-white text-black hover:bg-saffron hover:text-[#C24C30]'
          }`}
        >
          Account Settings
        </button>
        <button
          onClick={() => {
            setActiveTab('dispute');
            setShowDisputeForm(true);
          }}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'dispute'
              ? 'bg-saffron text-black'
              : 'bg-white text-black hover:bg-saffron hover:text-[#C24C30]'
          }`}
        >
          Raise Dispute
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'history'
              ? 'bg-saffron text-black'
              : 'bg-white text-black hover:bg-saffron hover:text-[#C24C30]'
          }`}
        >
          Dispute History
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'summary' ? (
          role === 'owner' ? <OwnerDashboard /> : <RenterDashboard />
        ) : activeTab === 'settings' ? (
          <DashboardSettings role={role} />
        ) : activeTab === 'history' ? (
          <DisputeHistory role={role} />
        ) : null}
      </div>

      {/* Dispute Form Modal */}
      {showDisputeForm && (
        <DisputeForm role={role} onClose={() => setShowDisputeForm(false)} />
      )}
    </div>
  );
};

export default Dashboard;







