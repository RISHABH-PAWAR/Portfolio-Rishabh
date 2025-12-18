import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8a1efbafa891faf7a8adb3f9ec8c8359@o4510495065178112.ingest.us.sentry.io/4510554612367360",
  tracesSampleRate: 1,
  sendDefaultPii: true,
});
