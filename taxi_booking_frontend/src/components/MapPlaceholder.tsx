"use client";

export default function MapPlaceholder() {
  return (
    <div className="w-full aspect-[3/2] min-h-[320px] max-h-[450px] rounded-xl bg-gradient-to-br from-blue-500/10 to-gray-50 flex flex-col items-center justify-center border border-dashed border-blue-300 shadow-md">
      <div className="text-blue-600 text-6xl mb-3">🗺</div>
      <div className="font-semibold text-primary text-lg mb-1">
        Map Placeholder
      </div>
      <div className="text-gray-500 text-xs">
        (Live location and routing will appear here)
      </div>
    </div>
  );
}
