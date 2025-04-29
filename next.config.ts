import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

module.exports = {
    ...nextConfig,
    async rewrites() {
        return [
            {
                source: "/test/:path*",
                destination: "https://9buy272svi.execute-api.eu-central-1.amazonaws.com/test/:path*",
            },
        ];
    },
};
