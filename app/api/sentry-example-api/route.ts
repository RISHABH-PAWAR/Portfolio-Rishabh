import * as Sentry from "@sentry/nextjs";

export function GET() {
  // Proper way to log to Sentry
  Sentry.captureMessage("Sentry example API called");

  // Throw an example error to test Sentry
  throw new Error(
    "This error is raised on the backend called by the example page."
  );
}
