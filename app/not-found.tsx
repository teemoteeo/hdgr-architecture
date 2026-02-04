import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-tight mb-4">404</h1>
        <p className="text-lg text-secondary mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium group"
        >
          <span className="relative">
            Back to Home
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
