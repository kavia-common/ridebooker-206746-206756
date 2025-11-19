"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500/10 to-gray-50 border-t border-gray-200 mt-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <span>
          &copy; {new Date().getFullYear()} RideBooker. Built with
          <span className="mx-1" aria-label="ocean professional colors">🌊</span>
          Ocean Professional Theme.
        </span>
        <span>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Powered by Next.js
          </a>
        </span>
      </div>
    </footer>
  );
}
