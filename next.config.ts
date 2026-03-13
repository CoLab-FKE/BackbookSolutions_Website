import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use worker_threads instead of spawning child Node processes.
    // This avoids Windows environments where spawning Node with IPC returns EPERM.
    workerThreads: true,
  },
};

export default nextConfig;
