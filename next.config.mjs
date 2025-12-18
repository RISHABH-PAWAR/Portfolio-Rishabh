import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSentryConfig(
  nextConfig,
  {
    org: "rishabhrajputorg",
    project: "porfolio", // ⚠️ check spelling in Sentry dashboard

    silent: !process.env.CI,

    widenClientFileUpload: true,

    automaticVercelMonitors: true,
  }
);
