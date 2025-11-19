"use client";

import { useState } from "react";
import { useGetRideStatus } from "../../lib/api";

export default function TrackPage() {
  const [rideIdInput, setRideIdInput] = useState("");
  const [rideId, setRideId] = useState<string | null>(null);

  const { status, loading, error } = useGetRideStatus(rideId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRideId(rideIdInput.trim());
  };

  return (
    <div className="max-w-md mx-auto w-full py-12">
      <h1 className="text-2xl font-semibold text-primary mb-6">Track Your Ride</h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 mb-6 items-end"
        aria-label="Track ride by ID"
      >
        <div className="flex-1">
          <label htmlFor="rideid" className="block text-sm font-medium text-text mb-1">
            Ride ID
          </label>
          <input
            id="rideid"
            value={rideIdInput}
            onChange={(e) => setRideIdInput(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            placeholder="e.g., RB12345"
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow active:translate-y-px transition duration-150 disabled:opacity-60"
        >
          Track
        </button>
      </form>
      {loading && (
        <div className="px-4 py-4 bg-gradient-to-tr from-blue-500/10 to-gray-50 rounded mb-4">
          Checking ride status...
        </div>
      )}
      {error && (
        <div className="px-4 py-2 bg-error/10 border-l-4 border-error text-error rounded mb-4">
          {error}
        </div>
      )}
      {status && (
        <div className="bg-surface rounded-lg shadow p-4 space-y-1 border border-gray-100 animate-fade-in">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-primary font-bold">Status:</span>
            <span className="font-semibold">{status.status}</span>
          </div>
          <div>Pickup: <span className="font-medium">{status.pickup}</span></div>
          <div>Dropoff: <span className="font-medium">{status.dropoff}</span></div>
          <div>Driver: <span className="font-medium">{status.driver}</span></div>
          <div>Location: <span>{status.location}</span></div>
          <div>Estimated Arrival: <span className="font-medium">{status.eta}</span></div>
        </div>
      )}
    </div>
  );
}
