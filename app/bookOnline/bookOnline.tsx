"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import InputField from "./InputField";
import { Booking } from "@/lib/types";
import { addBooking } from "@/lib/bookings";

const services = [
  "Pigeon Safety Nets",
  "Bird Spikes",
  "Invisible Grills",
  "Balcony Safety Nets",
  "Children Safety Nets",
];

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Book Online Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            icon={<FaUser />}
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            icon={<FaPhoneAlt />}
          />
          <InputField
            label="Select Service"
            name="service"
            value={form.service}
            onChange={handleChange}
            error={errors.service}
            icon={<MdOutlineMiscellaneousServices />}
            options={services}
          />
          <InputField
            label="Preferred Date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            error={errors.date}
            icon={<FaCalendarAlt />}
          />
          <InputField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            error={errors.address}
            icon={<FaHome />}
            textarea
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Book Now
          </button>
        </form>

        {success && (
          <p className="mt-6 text-green-600 text-center font-semibold">
            ✅ Booking submitted successfully! We’ll contact you shortly.
          </p>
        )}
      </div>
    </section>
  );
}
