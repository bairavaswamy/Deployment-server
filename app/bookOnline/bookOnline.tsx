"use client";

import { useState } from "react";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Booking } from "@/lib/types";          // ✅ shared type
import { addBooking } from "@/lib/bookings";   // ✅ helper for IDB

export default function BookOnline() {
  const [form, setForm] = useState<Booking>({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    status: "pending",
  });

  const [errors, setErrors] = useState<Partial<Booking>>({});
  const [success, setSuccess] = useState(false);

  const services = [
    "Pigeon Safety Nets",
    "Bird Spikes",
    "Invisible Grills",
    "Balcony Safety Nets",
    "Children Safety Nets",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    const newErrors: Partial<Booking> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!form.service.trim()) newErrors.service = "Please select a service";
    if (!form.date.trim()) newErrors.date = "Please select a date";
    if (!form.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    try {
      // ✅ Save to IndexedDB
      await addBooking(form);

      setSuccess(true);
      setErrors({});
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        address: "",
        status: "pending",
      });
    } catch (err) {
      console.error("Error saving booking:", err);
    }
  };

  return (
    <section className="py-20 bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Online Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1">
              <FaUser className="mr-2 text-blue-500" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1">
              <FaPhoneAlt className="mr-2 text-green-500" /> Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1">
              <MdOutlineMiscellaneousServices className="mr-2 text-purple-500" />{" "}
              Select Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="">-- Choose Service --</option>
              {services.map((service, i) => (
                <option key={i} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1">
              <FaCalendarAlt className="mr-2 text-red-500" /> Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1">
              <FaHome className="mr-2 text-orange-500" /> Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book Now
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            ✅ Booking submitted successfully! We’ll contact you shortly.
          </p>
        )}
      </div>
    </section>
  );
}
