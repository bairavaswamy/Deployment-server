"use client";

import { useEffect, useState } from "react";
import type { Contact, Booking } from "@/lib/types";

// ✅ Import helpers with safe aliases to avoid name shadowing
import {
  getContacts,
  deleteContactById,
  updateContactStatus,
} from "@/lib/contacts";

import {
  getBookings,
  deleteBookingById,
  updateBookingStatus,
} from "@/lib/bookings";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load data from IndexedDB
  useEffect(() => {
    const fetchData = async () => {
      const [c, b] = await Promise.all([getContacts(), getBookings()]);
      setContacts(c);
      setBookings(b);
    };
    fetchData();
  }, []);

  // Refresh helpers
  const refreshContacts = async () => setContacts(await getContacts());
  const refreshBookings = async () => setBookings(await getBookings());

  // Handlers (names do NOT collide with imports)
  const handleDeleteContact = async (id?: number) => {
    if (id == null) return;
    await deleteContactById(id);
    await refreshContacts();
  };

  const handleDeleteBooking = async (id?: number) => {
    if (id == null) return;
    await deleteBookingById(id);
    await refreshBookings();
  };

  const handleMarkDone = async (type: "contact" | "booking", id?: number) => {
    if (id == null) return;
    if (type === "contact") {
      // If your API expects a different signature, e.g. updateContact({id, status}), adjust here.
      await updateContactStatus(id, "✅ Done");
      await refreshContacts();
    } else {
      await updateBookingStatus(id, "✅ Done");
      await refreshBookings();
    }
  };

  const StatusBadge = ({ status }: { status?: string }) => {
    const isDone = status === "✅ Done";
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          isDone ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status || "⏳ Pending"}
      </span>
    );
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">📊 Admin Dashboard</h1>

      {/* Contact Messages */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">📩 Contact Messages</h2>
        {contacts.length === 0 ? (
          <p className="text-gray-500 italic">No contact messages yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-indigo-600 text-white sticky top-0">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 font-medium">{c.name}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3 text-gray-600">{c.message}</td>
                    <td className="p-3"><StatusBadge status={c.status} /></td>
                    <td className="p-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => handleMarkDone("contact", c.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                      >
                        Mark Done
                      </button>
                      <button
                        onClick={() => handleDeleteContact(c.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Bookings Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">📅 Online Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500 italic">No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-indigo-600 text-white sticky top-0">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 font-medium">{b.name}</td>
                    <td className="p-3">{b.phone}</td>
                    <td className="p-3">{b.service}</td>
                    <td className="p-3">{b.date}</td>
                    <td className="p-3 text-gray-600">{b.address}</td>
                    <td className="p-3"><StatusBadge status={b.status} /></td>
                    <td className="p-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => handleMarkDone("booking", b.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                      >
                        Mark Done
                      </button>
                      <button
                        onClick={() => handleDeleteBooking(b.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
          <StickyContactIcons/>
    </div>
  );
}
