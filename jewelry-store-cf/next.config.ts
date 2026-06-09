import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = process.cwd();
const cloudflareHome = path.join(projectRoot, ".cloudflare");

process.env.XDG_CONFIG_HOME ??= cloudflareHome;
process.env.XDG_CACHE_HOME ??= path.join(cloudflareHome, "cache");
process.env.XDG_DATA_HOME ??= path.join(cloudflareHome, "data");

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bizweb.dktcdn.net",
      },
    ],
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((module) => module.initOpenNextCloudflareForDev());
