"use client";

import { useState } from "react";
import { Contact } from "@/lib/types";   // ✅ use shared types
import { addContact } from "@/lib/contacts"; // ✅ helper for IndexedDB

export default function ContactForm() {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    message: "",
    status: "new",
  });

  const [errors, setErrors] = useState<Partial<Contact>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    let newErrors: Partial<Contact> = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // ✅ Save into IndexedDB
      await addContact(formData);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", status: "new" });
    } catch (err) {
      console.error("Error saving contact:", err);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Send Us a Message
      </h2>
      {submitted ? (
        <p className="text-green-600 font-medium">
          ✅ Thank you! We’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 outline-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
