'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalQuotes: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/api/admin/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

        <DashboardCard
          title="Consumer Quotes"
          count={stats.totalQuotes}
          icon={<FontAwesomeIcon icon={faFileInvoice} />}
          link="/admin/consumerquotes"
        />
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickAction
          title="View Consumer Quotes"
          link="/admin/consumersquote"
        />
      </div>
    </div>
  );
}

/* ================= Components ================= */

function DashboardCard({ title, count, icon, link }) {
  return (
    <Link href={link}>
      <div className="cursor-pointer bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-600 text-sm">{title}</h3>
            <p className="text-3xl font-bold mt-2">{count}</p>
          </div>
          <div className="text-green-600 text-4xl">{icon}</div>
        </div>
      </div>
    </Link>
  );
}

function QuickAction({ title, link }) {
  return (
    <Link href={link}>
      <div className="bg-green-100 text-green-800 p-5 rounded-xl font-medium text-center hover:bg-green-200 transition cursor-pointer">
        {title}
      </div>
    </Link>
  );
}