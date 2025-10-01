"use client";
import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  icon: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  textarea?: boolean;
  rows?: number;
  options?: string[]; // for select dropdown
}

export default function InputField({
  label,
  name,
  type = "text",
  value,
  error,
  icon,
  onChange,
  textarea = false,
  rows,
  options,
}: InputFieldProps) {
  return (
    <div>
      <label className="flex items-center text-sm font-semibold text-gray-700 mb-1" htmlFor={name}>
        <span className="mr-2 text-blue-500">{icon}</span> {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 3}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      ) : options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">-- Choose {label} --</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
