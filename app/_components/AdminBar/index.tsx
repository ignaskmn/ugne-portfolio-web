"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function AdminBar() {
  const handleClick = () => {
    fetch("/api/exit-preview").then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="fixed top-3 right-3 bg-green-50">
      <div className="text-lg text-green-700 font-semibold py-2 px-6 flex flex-row items-center gap-6 shadow-md">
        <div className="font-sans uppercase">Preview mode</div>

        <button
          className="bg-white hover:bg-red-100 py-1 px-1 text-red-800 border border-red-800 rounded shadow-sm active:shadow-inner hover:shadow-md"
          onClick={handleClick}
        >
          <XMarkIcon className="w-6" />
        </button>
      </div>
    </div>
  );
}
