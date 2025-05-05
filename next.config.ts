import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://fbldxvs4r5.execute-api.eu-central-1.amazonaws.com/prod/:path*",
      },
      //   {
      //     source: "/",
      //     destination: `/auth/login`,
      //   },
    ];
  },
};

export default nextConfig;
