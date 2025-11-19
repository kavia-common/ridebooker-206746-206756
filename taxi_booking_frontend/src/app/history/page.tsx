"use client";

import { useGetHistory } from "../../lib/api";
import RideCard from "../../components/RideCard";

export default function HistoryPage() {
  const { history, loading, error } = useGetHistory();

  return (
    <div className="max-w-2xl mx-auto w-full py-10 px-2 sm:px-0">
      <h1 className="text-2xl font-semibold mb-6 text-primary">Booking History</h1>
      {loading && (
        <div className="text-gray-500 px-4 py-6 rounded bg-gradient-to-tr from-blue-500/10 to-gray-50 mb-4 shadow-sm">
          Loading your past rides...
        </div>
      )}
      {error && (
        <div className="px-4 py-2 bg-error/10 border-l-4 border-error text-error rounded mb-4">
          {error}
        </div>
      )}
      {!loading && !error && history.length === 0 && (
        <div className="px-4 py-6 text-gray-400 italic rounded border border-gray-100 bg-surface shadow-inner">
          No rides found.
        </div>
      )}
      <div className="space-y-4">
        {history.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
}
