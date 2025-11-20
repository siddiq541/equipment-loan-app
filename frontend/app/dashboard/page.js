"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../../components/Dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedRole = localStorage.getItem('role');

    if (!token) {
      router.push('/?login=true'); // redirect to login overlay
    } else {
      setIsAuthenticated(true);
      setRole(storedRole || 'renter'); // fallback to renter if role missing
    }
  }, [router]);

  return isAuthenticated && role ? <Dashboard role={role} /> : null;
}


