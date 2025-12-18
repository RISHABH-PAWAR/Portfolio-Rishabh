"use client";

export default function SentryTestPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Sentry Test</h1>

      <button
        className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={() => {
          throw new Error("Sentry frontend test error");
        }}
      >
        Throw Frontend Error
      </button>
    </div>
  );
}
