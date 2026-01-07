'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await axios.get('/api/contact');
        setQuotes(res.data.consumerQuotes || []);
      } catch (error) {
        console.error('Error fetching quotes:', error);
        setQuotes([]);
      }
    };

    fetchQuotes();
  }, []);


  const pendingQuotes = quotes.filter(
    (q) => (q.status || 'Pending') === 'Pending'
  );

  const contactedQuotes = quotes.filter(
    (q) => q.status === 'Contacted'
  );

 const markContacted = async (id) => {
  try {
    await axios.patch(`/api/contact/${id}`);

    setQuotes((prev) =>
      prev.map((q) =>
        q._id === id ? { ...q, status: "Contacted" } : q
      )
    );
  } catch (err) {
    console.error("Failed to update status", err);
  }
};


  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Consumer Quotes Dashboard
      </h1>

      {/* ================= Pending ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-yellow-700">
          Pending Requests
        </h2>

        {pendingQuotes.length === 0 ? (
          <p className="text-gray-500">No pending quotes</p>
        ) : (
          <div className="space-y-6">
            {pendingQuotes.map((q) => (
              <div key={q._id} className="bg-white p-6 rounded-2xl shadow">
                <p><strong>Name:</strong> {q.name}</p>
                <p><strong>Email:</strong> {q.email}</p>
                <p><strong>Location:</strong> {q.location}</p>
                <p><strong>Bill:</strong> {q.bill}</p>
                <p><strong>Message:</strong> {q.message}</p>

                <div className="flex gap-4 mt-4">

                  <button
                    onClick={() => markContacted(q._id)}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                  >
                    Mark Contacted
                  </button>
                </div>


              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= Contacted ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Contacted Consumers
        </h2>

        {contactedQuotes.length === 0 ? (
          <p className="text-gray-500">No contacted consumers</p>
        ) : (
          <div className="space-y-6">
            {contactedQuotes.map((q) => (
              <div key={q._id} className="bg-white p-6 rounded-2xl shadow">
                <p><strong>Name:</strong> {q.name}</p>
                <p><strong>Email:</strong> {q.email}</p>
                <p><strong>Location:</strong> {q.location}</p>
                <p><strong>Bill:</strong> {q.bill}</p>
                <p className="text-green-700 font-semibold">
                  ✔ Contacted
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
