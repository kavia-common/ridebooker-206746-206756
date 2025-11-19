"use client";

import { useState } from "react";

// PUBLIC_INTERFACE
export interface BookingData {
  pickup: string;
  dropoff: string;
  time: string;
  riders: number;
}

export default function BookingForm({
  onBook,
  loading,
}: {
  onBook: (data: BookingData) => void;
  loading: boolean;
}) {
  const [pickup, setPickup] = useState<string>("");
  const [dropoff, setDropoff] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [riders, setRiders] = useState<number>(1);

  const estimate = { price: "$11-13", eta: "9 min" };

  const isDisabled = loading || !pickup || !dropoff || !time;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({ pickup, dropoff, time, riders });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-xl shadow-lg p-6 border border-gray-100"
      autoComplete="off"
      aria-label="Book your ride"
    >
      <h2 className="text-xl font-semibold mb-4 text-primary">Book a New Ride</h2>
      <div className="flex flex-col gap-3">
        <div>
          <label className="font-medium block mb-1 text-text" htmlFor="pickup">
            Pickup Location
          </label>
          <input
            id="pickup"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="e.g., 123 Main St"
            required
          />
        </div>
        <div>
          <label className="font-medium block mb-1 text-text" htmlFor="dropoff">
            Dropoff Location
          </label>
          <input
            id="dropoff"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="e.g., Airport"
            required
          />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="font-medium block mb-1 text-text" htmlFor="time">
              Pick-up Time
            </label>
            <input
              id="time"
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-medium block mb-1 text-text" htmlFor="riders">
              Riders
            </label>
            <input
              id="riders"
              type="number"
              min={1}
              max={7}
              value={riders}
              onChange={(e) => setRiders(Number(e.target.value))}
              className="w-20 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-8 mt-1 pl-0.5">
          <span className="text-orange-500 font-medium">
            Est. Price: {estimate.price}
          </span>
          <span className="text-blue-500 font-medium">
            Est. Arrival: {estimate.eta}
          </span>
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className="mt-3 bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-lg w-full transition duration-150 active:translate-y-px disabled:opacity-60"
        >
          {loading ? "Booking..." : "Book Ride"}
        </button>
      </div>
    </form>
  );
}
