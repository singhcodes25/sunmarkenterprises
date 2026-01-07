'use client';
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import AdminDashboard from "./AdminDashboard";

export default function AdminPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  if (session?.user?.role !== "admin") return <p>Access Denied</p>;

  return <AdminDashboard />;
}
