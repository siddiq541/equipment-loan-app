"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/?login=true'); // redirect to login overlay
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated ? <Dashboard role="owner" /> : null;
}

