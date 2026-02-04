"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">Something went wrong</h1>
        <p className="text-secondary mb-8">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="text-sm border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors duration-150"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
