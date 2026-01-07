'use client'
import NavAdmin from "@/components/adminComponents/NavAdmin";
import FootAdmin from "@/components/adminComponents/FootAdmin";
import { SessionProvider } from "next-auth/react";


export default function Layout({ children }) {
  return (
    <>
      <SessionProvider>
        <div>
          <NavAdmin />
        </div>

        <div className="min-h-[66vh]">

          {children}

        </div>
        <FootAdmin />
      </SessionProvider>
    </>
  )
}