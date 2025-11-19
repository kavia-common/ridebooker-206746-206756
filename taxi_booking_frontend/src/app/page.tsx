"use client";

import BookingForm, { BookingData } from "../components/BookingForm";
import MapPlaceholder from "../components/MapPlaceholder";
import { useState } from "react";
import { useCreateBooking } from "../lib/api";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [lastBooking, setLastBooking] = useState<BookingData & { id: string } | null>(null);
  const { createBooking, loading, error } = useCreateBooking();

  const handleBooking = async (formData: BookingData) => {
    const booking = await createBooking(formData);
    if (booking) {
      setLastBooking(booking as BookingData & { id: string });
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full mx-auto py-8 px-2 sm:px-4 max-w-5xl">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <BookingForm onBook={handleBooking} loading={loading} />
          {error && (
            <div className="mt-4 px-4 py-2 bg-error/10 border-l-4 border-error text-error rounded">
              {error}
            </div>
          )}
          {submitted && lastBooking && (
            <div className="mt-6 px-4 py-4 bg-success/10 border-l-4 border-success rounded-lg shadow-sm">
              <p className="text-success font-semibold mb-2">
                Booking confirmed!
              </p>
              <p>
                Ride ID: <strong>{lastBooking.id}</strong>
              </p>
            </div>
          )}
        </div>
        <div>
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}
