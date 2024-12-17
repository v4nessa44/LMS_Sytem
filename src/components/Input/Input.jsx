import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`block w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      {...props}
    />
  );
}
