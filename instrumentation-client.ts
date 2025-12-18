// This file configures Sentry initialization for the client
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8a1efbafa891faf7a8adb3f9ec8c8359@o4510495065178112.ingest.us.sentry.io/4510554612367360",

  integrations: [Sentry.replayIntegration()],

  tracesSampleRate: 1, // Adjust for production if needed

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  sendDefaultPii: true, // Send user PII if needed

  debug: process.env.NODE_ENV === "development", // ✅ Valid property to enable logging in dev
});

// Router and request error helpers
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
export const onRequestError = Sentry.captureRequestError;

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}
