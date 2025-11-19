"use client";

import React from "react";

// Shared type for ride
export type Ride = {
  id: string;
  status: "pending" | "completed" | "in_progress" | "cancelled";
  pickup: string;
  dropoff: string;
  time: string;
};

// PUBLIC_INTERFACE
export default function RideCard({ ride }: { ride: Ride }) {
  const statusColors: Record<Ride["status"], string> = {
    pending: "bg-orange-100 text-orange-600 border-orange-400",
    in_progress: "bg-blue-100 text-blue-700 border-blue-400",
    completed: "bg-green-100 text-green-700 border-green-400",
    cancelled: "bg-red-100 text-red-600 border-error",
  };

  return (
    <div
      className={`rounded-xl shadow bg-surface border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2`}
    >
      <div>
        <div className="font-semibold text-sm mb-1 text-primary">
          {ride.pickup} &rarr; {ride.dropoff}
        </div>
        <div className="text-xs font-mono text-gray-500">
          {new Date(ride.time).toLocaleString()}
        </div>
        <div className="text-xs text-gray-400">
          Ride ID: <span className="select-text">{ride.id}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span
          className={
            "px-2 py-0.5 rounded font-semibold border text-xs " +
            (statusColors[ride.status] || "bg-gray-100 text-gray-600 border-gray-400")
          }
        >
          {ride.status.replace("_", " ")}
        </span>
      </div>
    </div>
  );
}
