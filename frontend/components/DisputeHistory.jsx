"use client";
import React, { useState, useEffect } from 'react';
import {
  ExclamationTriangleIcon,
  CurrencyPoundIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';

const categoryIcons = {
  'Equipment Issue': <ExclamationTriangleIcon className="h-5 w-5 text-carbon" />,
  'Payment Dispute': <CurrencyPoundIcon className="h-5 w-5 text-carbon" />,
  'Inappropriate Language': <ChatBubbleLeftRightIcon className="h-5 w-5 text-carbon" />,
  'Listing Problem': <ClipboardDocumentListIcon className="h-5 w-5 text-carbon" />,
  'Documentation Request': <DocumentTextIcon className="h-5 w-5 text-carbon" />,
};

const DisputeHistory = ({ role = 'renter' }) => {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    // Initial mock data
    const initialDisputes = [
      {
        id: 'DP-001',
        role: 'renter',
        category: 'Equipment Issue',
        subject: 'Camera lens was cracked',
        status: 'Pending',
        date: '2025-11-10',
      },
      {
        id: 'DP-002',
        role: 'owner',
        category: 'Payment Dispute',
        subject: 'Late payment from renter',
        status: 'Pending',
        date: '2025-11-12',
      },
      {
        id: 'DP-003',
        role: 'renter',
        category: 'Inappropriate Language',
        subject: 'Owner used offensive words',
        status: 'Pending',
        date: '2025-11-14',
      },
    ];

    setDisputes(initialDisputes);

    // Simulate status updates
    const timer = setInterval(() => {
      setDisputes((prev) =>
        prev.map((d) => {
          if (d.status === 'Pending') return { ...d, status: 'Under Review' };
          if (d.status === 'Under Review') return { ...d, status: 'Resolved' };
          return d;
        })
      );
    }, 5000); // update every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const filteredDisputes = disputes.filter((d) => d.role === role);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-carbon">Dispute History</h2>
      {filteredDisputes.length === 0 ? (
        <p className="text-sm text-carbon">No disputes found for your account.</p>
      ) : (
        <ul className="space-y-4">
          {filteredDisputes.map((dispute) => (
            <li
              key={dispute.id}
              className="p-4 bg-white rounded-lg shadow border border-rust flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                {categoryIcons[dispute.category]}
                <div>
                  <p className="font-semibold text-carbon">{dispute.subject}</p>
                  <p className="text-xs text-carbon">{dispute.category} • {dispute.date}</p>
                </div>
              </div>
              <span
                className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-semibold ${
                  dispute.status === 'Resolved'
                    ? 'bg-green-100 text-green-700'
                    : dispute.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {dispute.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisputeHistory;




